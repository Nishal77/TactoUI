import { Command } from 'commander';
import chalk from 'chalk';
import { getAvailableComponents } from '../utils/components';

export const listCommand = new Command('list')
  .description('List all available TactoUI components')
  .action(() => {
    const components = getAvailableComponents();
    
    console.log(chalk.blue.bold('🎨 Available TactoUI Components:\n'));
    
    components.forEach((component, index) => {
      console.log(chalk.white(`${index + 1}. ${chalk.cyan.bold(component.name)}`));
      console.log(chalk.gray(`   ${component.description}`));
      console.log(chalk.gray(`   Usage: npx tactoui add ${component.name}\n`));
    });
    
    console.log(chalk.yellow('💡 Tip: Use "npx tactoui add <component-name>" to add a component to your project'));
  });
