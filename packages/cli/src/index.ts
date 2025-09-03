import { Command } from 'commander';
import { addCommand } from './commands/add';
import { listCommand } from './commands/list';
import { initCommand } from './commands/init';

const program = new Command();

program
  .name('tactoui')
  .description('CLI tool for adding TactoUI components to React Native projects')
  .version('0.1.0');

program.addCommand(addCommand);
program.addCommand(listCommand);
program.addCommand(initCommand);

program.parse();
