import { log } from '@helpers/Logger';
import type { SSHConfig } from '@ridenui/react-native-riden-ssh';
import { SSHClient } from '@ridenui/react-native-riden-ssh';
import type { IExecutor } from '@ridenui/unraid';
import { Executor } from '@ridenui/unraid';
import type { EventEmitter } from 'events';
import { DEBUG } from '../constants';

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
      // eslint-disable-next-line no-param-reassign
      command = command.command;
    }

    return this.client.execute(command, false).then((result) => {
      if (DEBUG) {
        log.debug({ result });
      }

      return Promise.resolve(result);
    });
  }

  executeStream(
    command: IExecutor.IExecuteSimple | IExecutor.IExecute,
  ): Promise<[EventEmitter, IExecutor.CancelFunction, Promise<IExecutor.IExecuteStreamResult>]> {
    if (typeof command === 'object') {
      // eslint-disable-next-line no-param-reassign
      command = command.command;
    }

    return this.client.executeStream(command);
  }
}
