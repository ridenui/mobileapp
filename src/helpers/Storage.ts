import { log } from '@helpers/Logger';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_PREFIX = '@riden:v1:';
const ignoredLogKeys = ['credentials', 'docker:image'];

export async function readFromStorage(key: string): Promise<string | null> {
  const item = await AsyncStorage.getItem(STORAGE_PREFIX + key);
  const isIgnoredKey = ignoredLogKeys.map((ignoredKey) => key.startsWith(ignoredKey)).length !== 0;
  if (!isIgnoredKey) {
    log.debug(`Read ${key} - ${item}`);
  } else {
    log.debug(`Read ${key}`);
  }

  return item;
}

export async function readMultipleFromStorage(keys: string[]): Promise<Record<string, string | null>> {
  const keysWithPrefix = keys.map((key) => {
    return STORAGE_PREFIX + key;
  });

  const read = await AsyncStorage.multiGet(keysWithPrefix);
  const result: Record<string, string | null> = {};

  read.forEach(([key, value]) => {
    // eslint-disable-next-line prefer-destructuring
    result[key.replace(STORAGE_PREFIX, '')] = value;
  });

  return result;
}

export async function writeToStorage(key: string, value: string): Promise<void> {
  const isIgnoredKey = ignoredLogKeys.map((ignoredKey) => key.startsWith(ignoredKey)).length !== 0;
  if (!isIgnoredKey) {
    log.debug(`Writing ${key} - ${key === 'credentials' ? 'REDACTED' : value}`);
  } else {
    log.debug(`Writing ${key}`);
  }

  return AsyncStorage.setItem(STORAGE_PREFIX + key, value);
}

export async function writeMultipleToStorage(keys: string[][]): Promise<void> {
  const keysWithPrefix = keys.map((key) => {
    return [STORAGE_PREFIX + key[0], key[1]];
  });

  return AsyncStorage.multiSet(keysWithPrefix);
}

export async function clear(): Promise<void> {
  return AsyncStorage.clear();
}
