import React from "react";
import * as S from './styles';

import {ArrowLeft as ArrowIcon} from '@styled-icons/heroicons-outline/ArrowLeft'

export type HeadingProps = {
  children: React.ReactNode,
} 

const Heading = ({children}: HeadingProps) => {
  return(
    <S.Wrapper onClick={() => window.history.back()}>
        <S.IconWrapper>
          <ArrowIcon/>
        </S.IconWrapper>
        {children}
    </S.Wrapper>
  )
}

export default Heading;