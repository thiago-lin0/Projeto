import styled, {css} from "styled-components";

import { ButtonProps } from ".";

type WrapperProps = Pick<ButtonProps, 'size' | 'fullWidth'>

const wrapperModifiers = {
  small: () => css`
  height: 3rem;
  font-size: 1.2rem;
  padding: 0.8rem 1.2rem
  `,
  medium: () => css`
  height: 4rem;
  font-size: 1.6rem;
  padding: 0.8rem 5rem;
  `,
  fullWidth: () => css`
  width: 100%;
  `
}
export const Wrapper = styled.button<WrapperProps>`
${({theme, size, fullWidth}) => css`
  width: 20rem;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-weight: ${theme.font.bold};
  border: 0.2rem solid #4A45BD;
  border-radius: ${theme.border.radius};
  box-shadow:  0rem 0.2rem 0.2rem 0rem rgba(0, 0, 0, 0.25);

  ${!!size && wrapperModifiers[size]}
  ${!!fullWidth && wrapperModifiers.fullWidth()}
`}
`