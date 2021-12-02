import { Executor, IExecutor } from '@ridenui/unraid';
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

  async connect() {
    await this.client.connect();
    return this.client.isConnected();
  }

  async execute(command: IExecutor.IExecuteSimple | IExecutor.IExecute): Promise<IExecutor.IExecuteResult> {
    if (typeof command === 'object') {
      command = command.command;
    }
    return this.client.execute(command);
  }
}
