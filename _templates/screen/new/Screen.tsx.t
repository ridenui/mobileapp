---
to: <%= path_from_root %>.tsx
---
import React from 'react';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import * as S from './<%= name %>.styled';

/**
 * Description of <%= name %>.
 */
export function <%= name%>Screen(): JSX.Element {
  return (
    <S.Container>
      <Typography variant={TypographyVariants.Paragraph}><%= name%></Typography>
    </S.Container>
  );
}
