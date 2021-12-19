import React, { useState } from 'react';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import * as S from '../Settings.styled';
import { Slider } from '@atoms/Slider/Slider';
import { writeToStorage } from '@helpers/Storage';
import { useSettings } from '../../../contexts/Settings.context';
import { ConfigValues } from '../../../constants';
import { settingsTextBuilder } from '@helpers/TextBuilder';

export function CPUDelay() {
  const { dashboard, reloadSettings } = useSettings();
  const [slidedValue, setSlidedValue] = useState(dashboard.cpuRefresh);

  const updateValue = (value: number) => {
    writeToStorage(ConfigValues.cpuRefresh, value.toString(10)).then(() => {
      reloadSettings();
    });
  };

  const getValue = (value: number | number[]): number => {
    if (typeof value === 'object') {
      return value[0];
    }
    return value;
  };

  return (
    <S.SettingsBox header={''}>
      <Typography variant={TypographyVariants.H4}>CPU refresh delay</Typography>
      <Slider
        step={1000}
        maximumValue={10000}
        minimumValue={0}
        animationType={'spring'}
        onSlidingComplete={value => {
          updateValue(getValue(value));
        }}
        onValueChange={value => {
          setSlidedValue(getValue(value));
        }}
        value={slidedValue}
      />
      <Typography variant={TypographyVariants.Small}>{settingsTextBuilder(slidedValue, 'ms')}</Typography>
    </S.SettingsBox>
  );
}
