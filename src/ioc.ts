import { Container } from 'inversify';
import { CommandService } from './services/commands';
// import { TYPES } from './services/types';

const container = new Container({
  autoBindInjectable: true,
  defaultScope: 'Transient'
});

container.bind(CommandService).toSelf().inSingletonScope();

export { container };
