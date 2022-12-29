import styled, {css} from "styled-components";
import media from 'styled-media-query';

export const Wrapper = styled.menu`
${() => css`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 2.9rem 2.4rem;
  background-color: #fff;
`}
`
export const IconWrapper = styled.div`
  ${() => css`
  cursor: pointer;
  color: #000;
  width: 3.4rem;
  height: 3.4rem;
  `}
`
export const MenuNav = styled.div`
margin-left: 2.9rem ;
`
export const MenuLink = styled.a`
${({ }) => css`
    position: relative;
    font-size: 1.6rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    color: #000;
    margin: 0.3rem 2.9rem 0;
    text-decoration: none;
    text-align: center;
    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: #4A45BD;
        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`
//Logica para o menu abrir
type MenuFullProps = {
  isOpen: boolean;
}
export const MenuFull = styled.nav<MenuFullProps>`
${({isOpen}) => css`
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
background: #fff;
top:0;
left: 0;
right: 0;
bottom: 0;
overflow: hidden;
transition: opacity 0.3s ease-in-out;
opacity: ${isOpen ? 1 : 0};
pointer-events: ${isOpen ? 'auto' : 'none'};

  ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }

    ${MenuLink} {
      color: #000;
      font-weight: 600;
      font-size: 2.0rem;
      margin-bottom: 600;
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }

  ${RegisterBox}{
    transform: ${isOpen ? 'traslateY(0)' : 'translateY(3em)'};
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 0 4.8rem 4.8rem;

    > span {
      display: block;
      margin: 0.8rem 0;
      font-size: 1.2rem;
    }
  
  }

> svg {
  position: absolute;
  top: 0;
  right: 0;
  margin: 1.6rem;
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;
`}
`
export const RegisterBox = styled.div`
  ${({}) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    
    a:last-child{
      margin-left: 2rem;
    }
  `}
`


