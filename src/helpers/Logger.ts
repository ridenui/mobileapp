import RNFS from 'react-native-fs';
import { consoleTransport, fileAsyncTransport, logger } from 'react-native-logs';

export function getTodaysLogName() {
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  return `riden_${date}_${month}_${year}.log`;
}

const multiLogger = logger.createLogger({
  transport: (props) => {
    consoleTransport(props);
    fileAsyncTransport(props);
  },
  transportOptions: {
    FS: RNFS,
    fileName: getTodaysLogName(),
    colors: 'ansi',
  },
  severity: 'debug',
});

export const log = multiLogger;
