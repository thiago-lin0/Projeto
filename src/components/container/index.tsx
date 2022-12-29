import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({theme}) => css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: ${theme.grid.container};
      margin-left: auto;
      margin-right: auto;
      padding-left: 1.6rem;
      padding-right: 1.6rem;
      min-height: 100vh;
  `}
`
