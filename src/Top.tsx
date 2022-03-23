import * as React from 'react';
import { observer } from 'mobx-react';
import { resolve } from 'inversify-react';
import { CommandService } from './services/commands';

@observer
export class TopComponent extends React.Component {
  @resolve(CommandService)
  private readonly cmd!: CommandService;

  render() {
    return (
      <div
        onClick={() => {
          this.cmd.execute('test.cmd');
        }}
        className="navigation-item"
        style={{ backgroundColor: '#2e91fc' }}
      >
        ↑ top
      </div>
    )
  }
}
