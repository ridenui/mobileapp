// https://testing-library.com/docs/react-native-testing-library/setup
import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { light } from '@styles/Themes';

const AllTheProviders: FC = ({ children }) => {
  return <ThemeProvider theme={light}>{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react-native';
export * from 'jest-styled-components';

export { customRender as render };
