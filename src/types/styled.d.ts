import 'styled-components/native';
import type { Theme } from '@styles/Themes';

declare module 'styled-components/native' {
  /* eslint-disable-next-line */
  export interface DefaultTheme extends Theme {} // extends the global DefaultTheme with our ThemeType.
}
