import { LogBox } from 'react-native';

LogBox.ignoreLogs(['ViewPropTypes', 'react-native-gesture-handler']);

export const DEBUG = false;

export enum ConfigValues {
  cpuRefresh = 'config:cpuRefresh',
  theme = 'config:theme',
}
