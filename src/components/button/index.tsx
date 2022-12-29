import React from 'react'
import {AnchorHTMLAttributes, ButtonHTMLAttributes} from 'react';

import * as S from './styles';

type ButtonTypes = AnchorHTMLAttributes<HTMLAnchorElement> |ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium',
  backgroundColor?: string,
  color?: string,
  borderColor?: string,
  fullWidth?: boolean,
  as?: ButtonTypes,
} & ButtonTypes

export function Button({children, size = 'medium', backgroundColor, color, borderColor, fullWidth = false}: ButtonProps) {
  return (
    <S.Wrapper size={size} fullWidth={fullWidth} style={{ backgroundColor, color, borderColor } }>{!!children && <span>{children}</span>}</S.Wrapper>
  )
}

export default Button