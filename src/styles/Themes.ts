export type ThemeColors =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | 'text'
  | 'textInvert';

export type Theme = {
  [key in ThemeColors]: string;
};

export const light: Theme = {
  '100': '#8E8E93',
  '200': '#AEAEB2',
  '300': '#C7C7CC',
  '400': '#D1D1D6',
  '500': '#E5E5EA',
  '600': '#F2F2F7',
  '700': '#FFFFFF',
  text: '#000',
  textInvert: '#FFF',
};

export const dark: Theme = {
  '100': '#bcd8ec',
  '200': '#b3cde0',
  '300': '#6497b1',
  '400': '#005b96',
  '500': '#03396c',
  '600': '#091C32',
  '700': '#103159',
  text: '#FFF',
  textInvert: '#000',
};
