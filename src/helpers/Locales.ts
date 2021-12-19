import { log } from '@helpers/Logger';
import type { Locale } from 'date-fns';
import * as Locales from 'date-fns/locale';

export function getDateFnsLocale(tag: string): Locale {
  const processedTag = tag.substring(0, 2).toLowerCase();
  log.debug(`Fetching locale "${processedTag}"`);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const locale = Locales[processedTag.substring(0, 2).toLowerCase()];
  if (!locale) {
    log.error(`Locale "${processedTag}" does not exists. Using fallback.`);

    return Locales.enUS;
  }

  return locale;
}
