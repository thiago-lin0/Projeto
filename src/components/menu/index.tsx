import React,{useContext} from 'react';
import Link from 'next/link';
import {useState} from 'react';
import { AuthContext } from '../../contexts/authContexts';

import {Menu as MenuIcon} from '@styled-icons/heroicons-outline/Menu';
import {XCircle as CloseIcon} from '@styled-icons/heroicons-outline/XCircle';


import Logo from '../logo';
import Button from '../button';
import MediaMatch from '../mediaMatch';
import * as S from './styles';

type MenuProps = {
  userName?: String | null;
}

const Menu = ({userName}:MenuProps) => {
  const [isOPen, setIsOpen] = useState(false)
  const { Logout } = useContext(AuthContext)
  
  return (
  <>
    <S.Wrapper>
      <Logo mobile/>

      <MediaMatch lessThan='small'>
      <S.IconWrapper onClick={ () => setIsOpen(true)}>
        <MenuIcon aria-label="Abrir Menu"/>
      </S.IconWrapper>
      </MediaMatch>

      <MediaMatch greaterThan='small'>
        {!!userName &&(
          <S.MenuNav>
              <S.MenuLink href="/minhaConta">Minha Conta</S.MenuLink>
              {/* <S.MenuLink href="/suporte">Suporte</S.MenuLink> */}
            <S.MenuLink role='button' onClick={() => Logout()}>Sair</S.MenuLink>
          </S.MenuNav>
        )}
        {!userName && (
          <S.RegisterBox >
            <Link href='/criarConta'>
              <Button  size="medium" backgroundColor='white' color='#4A45BD' borderColor='#4A45BD'>Criar Conta</Button>
            </Link>
            <Link href='/login'>
              <Button  size="medium">Login</Button>
            </Link>
          </S.RegisterBox>
        )}
        </MediaMatch>
    

   
      <S.MenuFull aria-hidden={!isOPen} isOpen={isOPen}>
        <CloseIcon arial-label="Fechar Menu" onClick={ () => setIsOpen(false)}/>
   
  
          <S.MenuNav>
              {!!userName && (
                <>
                  <S.MenuLink href="/minhaConta">Minha Conta</S.MenuLink>
                  {/* <S.MenuLink href="/suporte">Suporte</S.MenuLink> */}
                  <S.MenuLink role='button' onClick={() => Logout()}>Sair</S.MenuLink>
                </>
              )}
            </S.MenuNav>
     
       <MediaMatch lessThan='small'>
        {!userName &&(
          <S.RegisterBox>
            <Link href='/criarConta'>
              <Button fullWidth size="medium" backgroundColor='white' color='#4A45BD' borderColor='#4A45BD'>Criar Conta</Button>
            </Link>
          <span>ou</span>
          <Link href='/login'>
            <Button fullWidth size="medium">Login</Button>
          </Link>
         </S.RegisterBox>
        )} 
       </MediaMatch>
 
      </S.MenuFull>
    </S.Wrapper>
   </>
  )
}

export default Menu