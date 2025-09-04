import { Command } from 'commander';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';

export const initCommand = new Command('init')
  .description('Initialize TactoUI in your React Native project')
  .option(
    '-d, --dir <directory>',
    'Directory to create components in',
    'src/components'
  )
  .action(async (options) => {
    try {
      const spinner = ora('Initializing TactoUI...').start();

      try {
        await initializeTactoUI(options.dir);
        spinner.succeed(chalk.green('✅ TactoUI initialized successfully!'));

        console.log(chalk.blue('\n📝 What was created:'));
        console.log(
          chalk.gray(`- ${options.dir}/ directory for your components`)
        );
        console.log(chalk.gray(`- Example component structure`));

        console.log(chalk.blue('\n🚀 Next steps:'));
        console.log(chalk.gray('1. Install required dependencies:'));
        console.log(
          chalk.gray(
            '   npm install @tactoui/ui nativewind react-native-reanimated react-native-gesture-handler'
          )
        );
        console.log(chalk.gray('2. Add components: npx tactoui add button'));
        console.log(
          chalk.gray('3. List available components: npx tactoui list')
        );
      } catch (error) {
        spinner.fail(chalk.red('❌ Failed to initialize TactoUI'));
        console.error(
          chalk.red(error instanceof Error ? error.message : 'Unknown error')
        );
        process.exit(1);
      }
    } catch (error) {
      console.error(chalk.red('❌ An error occurred:'), error);
      process.exit(1);
    }
  });

async function initializeTactoUI(componentsDir: string) {
  const targetDir = path.join(process.cwd(), componentsDir);

  // Create components directory
  await fs.ensureDir(targetDir);

  // Create a README file
  const readmeContent = `# TactoUI Components

This directory contains your TactoUI components.

## Adding Components

Use the TactoUI CLI to add components:

\`\`\`bash
npx tactoui add button
npx tactoui add card
npx tactoui list
\`\`\`

## Available Components

- Button - Interactive button component
- Card - Container component with header, content, and footer
- Switch - Toggle switch component
- Input - Text input component with label and error states
- Badge - Small status indicator
- Avatar - User profile image component
- Progress - Progress bar component
- Checkbox - Checkbox input component
- Radio - Radio button component
- Slider - Range slider component

## Usage

\`\`\`tsx
import { Button } from './Button';

export function MyComponent() {
  return (
    <Button onPress={() => console.log('Pressed!')}>
      Click me
    </Button>
  );
}
\`\`\`
`;

  await fs.writeFile(path.join(targetDir, 'README.md'), readmeContent);
}
