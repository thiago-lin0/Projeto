import Link from "next/link";
import { useContext, useEffect } from "react";
import Button from "../components/button";
import { Container } from "../components/container";
import Footer from "../components/footer";
import Heading from "../components/heading";
import MediaMatch from "../components/mediaMatch";
import Menu from "../components/menu";
import { AuthContext } from "../contexts/authContexts";
import * as S from "../styles/styles";

export default function MinhaConta() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Menu userName="teste" />
      <Container>
        <S.Wrapper>
          <Heading>Minha Conta</Heading>
          <S.CardWrappper>
            <MediaMatch greaterThan="small">
              <S.ConteineLeftrWrapper></S.ConteineLeftrWrapper>
            </MediaMatch>
            <S.ConteinerWrapper>
              <S.ConteinerCard>
                <S.Title>Informações de perfil</S.Title>
                <S.Label>
                  nome da compania
                  <p>{user?.name}</p>
                </S.Label>
                <S.Label>
                  E-mail
                  <p>{user?.users_email.email}</p>
                </S.Label>
                <Link href="./editarPerfil">
                  <Button
                    size="medium"
                    backgroundColor="white"
                    color="#4A45BD"
                    borderColor="#4A45BD"
                  >
                    Editar Perfil
                  </Button>
                </Link>
              </S.ConteinerCard>
              <S.ConteinerCard>
                <S.Title>Plano atual</S.Title>
                <S.Plan>
                  <h2>Boost Reports</h2>
                  <p>Plano Mensal</p>
                </S.Plan>
                <Link href="/planos">
                  <Button>Editar Plano</Button>
                </Link>
              </S.ConteinerCard>
            </S.ConteinerWrapper>
          </S.CardWrappper>
        </S.Wrapper>
      </Container>
      <Footer />
    </>
  );
}
