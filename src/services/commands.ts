import { CommandRegistry } from '@lumino/commands';
import { injectable } from 'inversify';

@injectable()
export class CommandService {
  private cmdRegistry: CommandRegistry;

  constructor() {
    this.cmdRegistry = new CommandRegistry();
  }

  /**
   * addCommand
   */
  public addCommand(id: string, options: CommandRegistry.ICommandOptions) {
    this.cmdRegistry.addCommand(id, options);
  }

  public execute(id: string) {
    this.cmdRegistry.execute(id);
  }

  public listCommands(): string[] {
    return this.cmdRegistry.listCommands();
  }
}