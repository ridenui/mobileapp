import 'styled-components/native';
import { Theme } from '../styles/Themes';

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {} // extends the global DefaultTheme with our ThemeType.
}
