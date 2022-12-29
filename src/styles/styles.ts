import styled from "styled-components"
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 6.3rem;
`
export const CardWrappper = styled.div`
  display: flex;
`
export const ConteinerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  align-items: center;
  justify-content: space-between;
`
export const ConteineLeftrWrapper = styled.div`
  background: #4A45BD;
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 1.5rem;
  width: 30rem;
  height: 65rem;

  ${media.between('small', 'medium')`
    display: none;
  `}
`
export const ConteineLeftPlan = styled.div`
  background: #4A45BD;
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 1.5rem;
  width: 30rem;
  height: 100%;

  ${media.between('small', 'medium')`
    display: none;
  `}

  ${media.lessThan('large')`
    height: 100rem;
  `}
`
export const ConteinerCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  padding: 3.8rem 0 0 3.4rem;
  font-family: 'Inter', sans-serif;
  border-radius: 1.5rem;
  width: 85rem;
  margin-left: 2rem;
  padding: 2.8rem 2.4rem 3.8rem 2.4rem;

  ${media.lessThan('medium')`
    width: 50rem;
    margin: 0 0 2rem 0;
    padding: 2.8rem 2.4rem 3.8rem 2.4rem;
  `}
  ${media.between('medium', 'large')`
    width: 60rem;
  `}
  ${media.lessThan('small')`
    width: 35rem;
  `}
`
export const Title = styled.h1`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.1rem;
  margin-bottom: 3.4rem;
  color:#424347;
`
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: #999999;
  padding-bottom: 1.3rem;
  width: 30rem;

  input, select{
    width: 31.9rem;
    height: 4.5rem;
    border: 0.1rem solid #979797;
    border-radius: 1.5rem;
    padding: 1.15rem 0 1.15rem 1.7rem;
    font-size: 1.8rem;
    line-height: 2.1rem;
    color:#3E3E3E;
    margin: 0.5rem 0 0 0;
  }
  span{
    color: red;
  }

  p {
    font-size: 1.8rem;
    line-height: 2.1rem;
    margin-top: 0.5rem;
    margin-bottom: 1.9rem;
    color:#3E3E3E;  
  }
`
export const Plan = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.7rem;
>h2{
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.4rem;
  color: #424347;
  display: inline-block;
}
  > p {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.2rem;
    letter-spacing: -0.055rem;
  }

`
// editar Perfil
export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  padding-bottom: 4.5rem;

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 0;
  `}
`
export const ContainerRigth = styled.div`
  height: 48.5rem;
  display: flex;
  flex-direction: column;
  margin-right: 11.5rem;
  align-items: center;

  ${media.lessThan('medium')`
    height: 0;
  `}
  ${media.between('medium', 'large')`
    margin-right: 0;
  `}
`
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;

  > Button{
      margin-bottom: 1.8rem;
      padding: 0 !important;
    }
`
export const LabelMinhaConta = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #D9D9D9;
  width: 17.2rem;
  height: 17.2rem;
  border-radius: 50%;
  cursor: pointer;
  margin-bottom: 2.8rem;

  img{
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
  }
  
> input{
  display: none;
}
`
export const LabelBottomMinhaConta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #D9D9D9;
  width: 17.2rem;
  height: 17.2rem;
  border-radius: 50%;
  cursor: pointer;
  margin-bottom: 2.8rem;

> input{
  display: none;
}
${media.lessThan('medium')`
    display: none;
  `}
`
export const ButtonCancelar = styled.button`
font-weight: 600;
font-size: 1.6rem;
color: #4a45bd;
background: none;
`
// criar conta
export const ButtonCriarConta = styled.div`
  margin-top: 3rem;
`
//login

export const ContainerLogin = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
  rgba(74, 69, 189, 1) 50%,
  rgba(255, 255, 255, 1) 50%
);
`
export const shadow = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(23, 23, 23, 0.5);;
`
export const Image = styled.img`
  width: 100%;
  height: 100vh;
  position: absolute;
  object-fit: cover;
`
export const ConteinerForm = styled.form`
  font-family: 'Montserrat', sans-serif;
  color: #FFFFFF;
  width: 47.9rem;
  height: 54.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(169, 169, 169, 0.2);
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2.6rem);
  border-radius: 4.3rem;
  h1{
    font-weight: 600;
    font-size: 4.8rem;
    line-height: 5.9rem;
  }

  h3{
    font-size: 2.6rem;
    line-height: 3.2rem;
    font-weight: 500;
    margin-bottom: 3.5rem;
  }
    
  input {
    width: 35.1rem;
    height: 6.3rem;
    display: block;
    border-radius: 2.5rem;
    background: #EBEBEB;
    border: 0.2rem solid #959595;
    padding: 1.9rem 0 1.9rem 2.9rem;
    margin-bottom: 2rem;
    font-size: 2rem;
    line-height: 2.4rem;
  }

  p{
    font-family: 'Inter';
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.2rem;
    text-align: center;
    margin-top: 1.5rem;

    a{
      text-decoration: underline;
    }
  }
`
export const btn = styled.button`
  width: 20rem;
  background: #4A45BD;
  color: #fff;
  font-weight: bold;
  border: 0.2rem solid #4A45BD;
  border-radius: 1.2rem;
  box-shadow:  0rem 0.2rem 0.2rem 0rem rgba(0, 0, 0, 0.25);
  margin-left: 1rem;
  width: 100%;
`
//pagamento
export const WrapperCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 88rem;
    margin-top: 2rem;
    margin-left: 2rem;
    justify-content: space-between;

  ${media.lessThan('small')`
    justify-content: center;
  `}
`
export const WrapperPagamento = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 88rem;
    margin-left: 2rem;
    justify-content: space-between;

  ${media.lessThan('small')`
    justify-content: center;
  `}
`
export const ConteinerPagamento = styled.div`
  display: flex;
  width: 88rem;

  ${media.lessThan('medium')`
    width: 59rem;
  `}
  ${media.between('medium', 'large')`
    width: 61rem;
  `}
  ${media.lessThan('small')`
    width: 35rem;
  `}
`
//planos

export const Planos = styled.div`
  display: flex;
  justify-content: space-between;

  p{
    font-family: 'Inter';
    font-size: 1.8rem;
    line-height: 2.2rem;
    color: #3E3E3E;
  }
`
export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 27.5rem;
`
export const ContainerRigthPlanos  = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 27.5rem;

  >button{
    margin: 0;
  }
  button{
    padding: 0;
  }
`
export const Mobile = styled.div`
 button{
  padding: 0;
 }
`
export const TopMobile = styled.div`
display:flex;
flex-direction: column;
align-items: center;
`
export const BottomMobile = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 3rem;
`
//index
export const Header = styled.div`
  width: 100%;
  height: 89%;
  padding-top: 4rem;

  div{
    display: flex;
    justify-content: flex-end;
  }
`
export const Box = styled.div`
  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > button{
      margin: 3rem;
    }
    `}
    `