import React from 'react'

import * as S from './styles';
import Logo from '../logo';
const Footer = () => {
  return (
    <S.Wrapper>
      <Logo/>
      <S.IconsWrapper>
        <a href="#">
          <S.Icons src="./assets/Fb_icon.png" alt="Logo do Facebook"/>
        </a>
        <a href="https://www.instagram.com/boostreports/">
          <S.Icons src="./assets/Insta_icon.png" alt="Logo do Instagram" />
        </a>
      </S.IconsWrapper>
    </S.Wrapper>
  )
}

export default Footer