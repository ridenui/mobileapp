import { Executor } from '@ridenui/unraid/dist/instance/executor';
import * as IExecutor from '@ridenui/unraid/dist/instance/executor';
import { SSHConfig, SSHClient } from '@ridenui/react-native-riden-ssh';

export class ReactNativeExecutor extends Executor<SSHConfig> {
  private client: SSHClient;

  constructor(config: SSHConfig) {
    super(config);

    this.client = new SSHClient(config);
  }

  async disconnect() {
    await this.client.disconnect();
  }

  async execute(command: IExecutor.IExecuteSimple | IExecutor.IExecute): Promise<IExecutor.IExecuteResult> {
    if (typeof command === 'object') {
      command = command.command;
    }
    return this.client.execute(command);
  }
}
