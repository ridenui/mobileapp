import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_PREFIX = '@riden:';

export async function readFromStorage(key: string): Promise<string | null> {
  return AsyncStorage.getItem(STORAGE_PREFIX + key);
}

export async function writeToStorage(key: string, value: string): Promise<void> {
  return AsyncStorage.setItem(STORAGE_PREFIX + key, value);
}

export async function writeMultipleToStorage(keys: string[][]): Promise<void> {
  const keysWithPrefix = keys.map(key => {
    return [STORAGE_PREFIX + key[0], key[1]];
  });
  return AsyncStorage.multiSet(keysWithPrefix);
}

export async function clear(): Promise<void> {
  return AsyncStorage.clear();
}
