import type { Theme } from '@styles/Themes';

export type WithTheme = {
  theme: Theme;
};

export type Credentials = {
  host: string;
  port: number;
  username: string;
  password: string;
};

export enum Themes {
  DARK = 'dark',
  LIGHT = 'light',
}
