import styled, {css} from 'styled-components';
import media from 'styled-media-query';

import { HeadingProps } from '.';


export const Wrapper = styled.a<HeadingProps>`
  ${()=> css`
  width:117.4rem;
  display: flex;
  align-items: center;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  margin-top: 8rem;
  margin-bottom: 4.5rem;
  font-size: 1.5rem;
  color: #424347;
  cursor:pointer;
  }
  
  
  ${media.greaterThan('medium')`
    font-size: 2.4rem;
    width: 117.4rem;
  `} 
  ${media.between('medium', 'large')`
    width: 89.4rem;
  `}
  ${media.lessThan('medium')`
    width: 50rem;
  `}
  ${media.lessThan('small')`
    width: 35rem;
  `}
  `}
`
export const IconWrapper = styled.div`
  ${() => css`
  margin-right: 2.9rem;
  cursor: pointer;
  color: #424347;
  width: 3.4rem;
  height: 3.4rem;
  `}
`