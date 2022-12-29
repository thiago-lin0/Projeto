import styled, {css} from 'styled-components'
import media from "styled-media-query";

import { LogoProps } from '.'

const WrapperModifiers = {
  normal: () => css `
  width: 13.4rem;
  height: 5rem;
  `,
  large: () => css `
  width: 19.4rem;
  height: 7.3rem;
  `,
mobile: () => css`
${media.lessThan('medium')`
width: 1.8rem;
height: 1.5rem;

svg{
  height: 2.5rem;
}
`}
`
}

export const Wrapper = styled.div<LogoProps>`
  ${({size ,mobile}) => css`
  
  ${!!size && WrapperModifiers[size]}
  ${!!mobile && WrapperModifiers.mobile}
  `}
`