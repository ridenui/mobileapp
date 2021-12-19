import React from 'react';
import { Slider as RNSlider } from '@miblanchard/react-native-slider';
import { SliderProps as RNSliderProps } from '@miblanchard/react-native-slider/lib/types';
import { useTheme } from 'styled-components/native';

export interface SliderProps extends RNSliderProps {
  value: number;
}

export function Slider({ value, ...props }: SliderProps): JSX.Element {
  const theme = useTheme();

  return (
    <RNSlider
      trackStyle={{
        backgroundColor: theme['600'],
      }}
      thumbStyle={{
        backgroundColor: theme['300'],
      }}
      minimumTrackTintColor={theme['400']}
      trackClickable={true}
      value={value}
      {...props}
    />
  );
}
