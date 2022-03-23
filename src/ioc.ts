import { Container } from 'inversify';
import { CommandService } from './services/commands';
import { TYPES } from './services/types';

export const container = new Container({
  autoBindInjectable: true,
  defaultScope: 'Transient'
})

container.bind(TYPES.CommandService).to(CommandService).inSingletonScope();