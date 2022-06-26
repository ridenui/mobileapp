import React from 'react';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import type { UserScript } from '@ridenui/unraid/dist/modules/unraid/extensions/userscripts/user-script';
import * as S from './UserScriptCard.styled';

export interface UserScriptCardProps {
  script: UserScript;
}

export function UserScriptCard({ script }: UserScriptCardProps): JSX.Element {
  return (
    <S.UserScriptCard>
      <Typography variant={TypographyVariants.Paragraph}>{script.name}</Typography>
    </S.UserScriptCard>
  );
}
