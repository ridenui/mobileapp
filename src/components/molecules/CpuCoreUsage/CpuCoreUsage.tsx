import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, useWindowDimensions } from 'react-native';
import { AdvancedUsageIndicator } from '@atoms/AdvancedUsageIndicator/AdvancedUsageIndicator';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import type { CoreUsage } from '@ridenui/unraid/dist/modules/system/extensions/cpu';
import { Colors } from '@styles/Colors';
import * as S from './CpuCoreUsage.styled';

export interface CpuCoreUsageProps {
  core: CoreUsage & { core: number };
}

export interface AnimatedCpuUsage {
  name: string;
  color: string;
  usage: Animated.AnimatedInterpolation;
  key: keyof CoreUsage;
  isFirst?: boolean;
  isLast?: boolean;
}

function createAnimation(current: React.MutableRefObject<Animated.Value>, value: number) {
  return Animated.timing(current.current, {
    useNativeDriver: false,
    toValue: value,
    easing: Easing.ease,
    duration: 200,
  });
}

export function CpuCoreUsage({ core }: CpuCoreUsageProps): JSX.Element {
  const [combinedCoreUsage, setCombinedCoreUsage] = useState(0);
  const ioWait = useRef(new Animated.Value(0));
  const sys = useRef(new Animated.Value(0));
  const nice = useRef(new Animated.Value(0));
  const softwareInterrupts = useRef(new Animated.Value(0));
  const hardwareInterrupts = useRef(new Animated.Value(0));
  const steal = useRef(new Animated.Value(0));
  const usr = useRef(new Animated.Value(0));
  const { width } = useWindowDimensions();

  const getInterpolation = (current: React.MutableRefObject<Animated.Value>) => {
    const effectiveWidth = width * 0.95 - 16; // the surrounding box has a width of 95% and a padding of 8px per side

    return current.current.interpolate({
      inputRange: [0, 100],
      outputRange: [0, effectiveWidth],
    });
  };

  useEffect(() => {
    const ioWaitAnim = createAnimation(ioWait, core.ioWait);
    const sysAnim = createAnimation(sys, core.sys);
    const niceAnim = createAnimation(nice, core.nice);
    const swInterruptAnim = createAnimation(softwareInterrupts, core.softwareInterrupts);
    const hwInterruptAnim = createAnimation(hardwareInterrupts, core.hardwareInterrupts);
    const stealAnim = createAnimation(steal, core.steal);
    const usrAnim = createAnimation(usr, core.usr);

    setCombinedCoreUsage(
      core.ioWait + core.sys + core.nice + core.softwareInterrupts + core.hardwareInterrupts + core.steal + core.usr,
    );

    Animated.parallel([ioWaitAnim, sysAnim, niceAnim, swInterruptAnim, hwInterruptAnim, stealAnim, usrAnim]).start();
  }, [core]);

  const getUsage = () => {
    const usages: AnimatedCpuUsage[] = [
      { name: 'System', color: Colors.red, usage: getInterpolation(sys), key: 'sys' },
      { name: 'User', color: Colors.blue, usage: getInterpolation(usr), key: 'usr' },
      { name: 'IO Wait', color: Colors.grey, usage: getInterpolation(ioWait), key: 'ioWait' },
      { name: 'Nice', color: Colors.green, usage: getInterpolation(nice), key: 'nice' },
      {
        name: 'Interrupts (sw)',
        color: Colors.aqua,
        usage: getInterpolation(softwareInterrupts),
        key: 'softwareInterrupts',
      },
      {
        name: 'Interrupts (hw)',
        color: Colors.violet,
        usage: getInterpolation(hardwareInterrupts),
        key: 'hardwareInterrupts',
      },
      { name: 'steal', color: Colors.orange, usage: getInterpolation(steal), key: 'steal' },
    ];

    // Find first metric which is not zero (to give it round corners)
    for (const usage of usages) {
      if (core[usage.key] !== 0) {
        usage.isFirst = true;
        break;
      }
    }

    // Find last metric which is not zero (to give it round corners)
    for (let i = usages.length - 1; i >= 0; i--) {
      const usage = usages[i];
      if (core[usage.key] !== 0) {
        usage.isLast = true;
        break;
      }
    }

    return usages;
  };

  return (
    <>
      <S.Title>
        <Typography variant={TypographyVariants.Small}>Core {core.core}</Typography>
        <Typography variant={TypographyVariants.Small}>{Math.round(combinedCoreUsage)}%</Typography>
      </S.Title>
      <AdvancedUsageIndicator usages={getUsage()} />
    </>
  );
}
