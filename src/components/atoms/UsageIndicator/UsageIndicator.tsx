import React from 'react';
import * as S from './UsageIndicator.styled';

export interface UsageIndicatorProps {
  /** Number between 0 an 1 */
  usage: number;
}

/**
 * Description of UsageIndicator.
 */
export function UsageIndicator({ usage }: UsageIndicatorProps): JSX.Element {
  return (
    <S.UsageIndicatorBackground>
      <S.UsageIndicator usage={usage * 100} />
    </S.UsageIndicatorBackground>
  );
}
