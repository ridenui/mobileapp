import { Linking } from 'react-native';

export function openLink(link: string) {
  Linking.openURL(link);
}
