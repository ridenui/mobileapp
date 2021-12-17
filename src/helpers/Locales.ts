import * as Locales from 'date-fns/locale';
import { Locale } from 'date-fns';

export function getDateFnsLocale(tag: string): Locale {
  const processedTag = tag.substring(0, 2).toLowerCase();
  console.log('Fetching locale "' + processedTag + '"');
  // @ts-ignore
  const locale = Locales[processedTag.substring(0, 2).toLowerCase()];
  if (!locale) {
    console.error('Locale "' + processedTag + '" does not exists. Using fallback.');
    return Locales.enUS;
  }

  return locale;
}
