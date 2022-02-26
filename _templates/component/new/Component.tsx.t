---
to: <%= path_from_root %>.tsx
---
import React from 'react';
import * as S from './<%= name %>.styled';

export interface <%= name %>Props {
  /** Description of children. */
  children: string;
}

/**
 * Description of <%= name %>.
 */
export function <%= name%>({ children }: <%= name %>Props): JSX.Element {
  return <S.<%= name %>>{children}</S.<%= name %>>;
}
