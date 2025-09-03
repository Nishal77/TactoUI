import { Command } from 'commander';
import inquirer from 'inquirer';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';
import { getAvailableComponents } from '../utils/components';

export const addCommand = new Command('add')
  .description('Add a TactoUI component to your project')
  .argument('[component]', 'Component name to add')
  .option('-d, --dir <directory>', 'Directory to add the component to', 'src/components')
  .option('-f, --force', 'Overwrite existing files')
  .action(async (componentName, options) => {
    try {
      const availableComponents = getAvailableComponents();
      
      let selectedComponent = componentName;
      
      if (!selectedComponent) {
        const { component } = await inquirer.prompt([
          {
            type: 'list',
            name: 'component',
            message: 'Which component would you like to add?',
            choices: availableComponents.map(comp => ({
              name: `${comp.name} - ${comp.description}`,
              value: comp.name,
            })),
          },
        ]);
        selectedComponent = component;
      }

      if (!availableComponents.find(comp => comp.name === selectedComponent)) {
        console.error(chalk.red(`❌ Component "${selectedComponent}" not found.`));
        console.log(chalk.yellow('Available components:'));
        availableComponents.forEach(comp => {
          console.log(chalk.gray(`  - ${comp.name}`));
        });
        process.exit(1);
      }

      const spinner = ora(`Adding ${selectedComponent} component...`).start();
      
      try {
        await addComponent(selectedComponent, options.dir, options.force);
        spinner.succeed(chalk.green(`✅ Successfully added ${selectedComponent} component!`));
        
        console.log(chalk.blue('\n📝 Next steps:'));
        console.log(chalk.gray(`1. Import the component: import { ${selectedComponent} } from './${options.dir}/${selectedComponent}';`));
        console.log(chalk.gray(`2. Use it in your JSX: <${selectedComponent} />`));
        
      } catch (error) {
        spinner.fail(chalk.red(`❌ Failed to add ${selectedComponent} component`));
        console.error(chalk.red(error instanceof Error ? error.message : 'Unknown error'));
        process.exit(1);
      }
      
    } catch (error) {
      console.error(chalk.red('❌ An error occurred:'), error);
      process.exit(1);
    }
  });

async function addComponent(componentName: string, targetDir: string, force: boolean) {
  const templatePath = path.join(__dirname, '..', 'templates', `${componentName}.tsx`);
  const targetPath = path.join(process.cwd(), targetDir, `${componentName}.tsx`);
  
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template for ${componentName} not found`);
  }
  
  // Ensure target directory exists
  await fs.ensureDir(path.dirname(targetPath));
  
  // Check if file already exists
  if (fs.existsSync(targetPath) && !force) {
    throw new Error(`Component ${componentName} already exists. Use --force to overwrite.`);
  }
  
  // Copy template to target location
  await fs.copy(templatePath, targetPath);
}
