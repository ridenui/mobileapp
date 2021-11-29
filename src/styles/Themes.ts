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
  '100': '#8E8E93',
  '200': '#636366',
  '300': '#48484A',
  '400': '#3A3A3C',
  '500': '#2C2C2E',
  '600': '#000000',
  '700': '#1C1C1E',
  text: '#FFF',
  textInvert: '#000',
};
