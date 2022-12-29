import React from "react";
import { useContext } from 'react';
import { useRef} from "react";
import { useForm, SubmitHandler} from "react-hook-form";
import { AuthContext } from '../contexts/authContexts';

//estilos
import * as S from "../styles/styles";

//components
import { Container } from "../components/container";
import Menu from "../components/menu";
import Heading from "../components/heading";
import Footer from "../components/footer";
import Button from "../components/button";
import MediaMatch from "../components/mediaMatch";

interface Perfil {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  institution: string;
  avatar: string;
}

export default function editarPerfil() {
  const { user } = useContext(AuthContext)
  
  const {
    register,
    handleSubmit,
    reset,
    watch,
    unregister,
    formState: { errors },
  } = useForm<Perfil>();
  const onSubmit: SubmitHandler<Perfil> = (data) => console.log(data);

  const password = useRef({});
  password.current = watch("password", "");

  return (
    <>
      <Menu userName="teste" />
      <Container>

        <S.Wrapper>
        <Heading>Editar Perfil</Heading>
        <S.CardWrappper>

          <MediaMatch greaterThan="small">
            <S.ConteineLeftrWrapper></S.ConteineLeftrWrapper>
          </MediaMatch>
          <S.ConteinerWrapper>
            <S.ConteinerCard>
              <S.Title>Informações de perfil</S.Title>
          <S.Form onSubmit={handleSubmit(onSubmit)}>
              <MediaMatch lessThan="medium">
                <S.LabelMinhaConta>
                  <img src="/assets/cam.png" alt="foto de camera"/>
                  <input
                    {...register("avatar")}
                    type="file"
                    accept="image/png, image/jpeg"
                    defaultValue={user?.avatar}
                  />
                </S.LabelMinhaConta>
              </MediaMatch>
                <div>
                  <S.Label>
                    Companhia
                    <input
                      type="text"
                      placeholder="Insira o nome da companhia"
                      defaultValue={user?.company_name}
                      {...register("name")}
                    />
                  </S.Label>
                  <S.Label>
                    E-mail
                    <input
                      type="text"
                      placeholder="Insira o email"
                      defaultValue={user?.email}
                      required
                      {...register("email", {pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/})}
                    />
                    {errors.email && <span>E-mail inválido</span>}
                  </S.Label>
                  <S.Label>
                    Senha
                    <input
                      type="password"
                      placeholder="Insira sua senha"
                      defaultValue={user?.password}
                      required
                      {...register("password", {pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/})}
                    />
                    {errors.password && <span>Senha inválida</span>}
                  </S.Label>
                  <S.Label>
                    Confirmar senha
                    <input
                      type="password"
                      placeholder="Confirme sua Senha"
                      defaultValue={user?.password}
                      {...register("confirmPassword", {
                        validate: (value) => value === password.current,
                      })}
                    />
                    {errors.confirmPassword && (
                      <span> As senhas não são iguais</span>
                    )}
                  </S.Label>
                </div>
                <MediaMatch greaterThan="medium">
                <S.ContainerRigth>
                    <S.LabelBottomMinhaConta>  
                      <img src="/assets/cam.png" alt="foto de camera" />   
                    <input
                        {...register("avatar")}
                        type="file"
                        accept="image/png, image/jpeg"
                        defaultValue={user?.avatar}
                      />
                    </S.LabelBottomMinhaConta>
                    <S.Buttons>
                      <Button  type="submit">Salvar Perfil</Button>
                     {/* <Button
                        size="medium"
                        backgroundColor="white"
                        color="#4A45BD"
                        borderColor="#4A45BD"
                        onClick={() => unregister("name")}
                        >
                        Excluir Conta
                    </Button> */}
                      <S.ButtonCancelar  onClick={() => reset()}>Cancelar</S.ButtonCancelar>
                    </S.Buttons>
                </S.ContainerRigth>
                </MediaMatch>
                <MediaMatch lessThan='medium'>
                    <S.Buttons>
                      <Button >Salvar Perfil</Button>
                      {/*
                      <Button 
                        size="medium"
                        backgroundColor="white"
                        color="#4A45BD"
                        borderColor="#4A45BD"
                        onClick={() => unregister("name")}
                      >
                        Excluir Conta
                    </Button>*/}
                      <S.ButtonCancelar  onClick={() => reset()}>Cancelar</S.ButtonCancelar>
                    </S.Buttons>
                  </MediaMatch>
              </S.Form>
            </S.ConteinerCard>
          </S.ConteinerWrapper>
      </S.CardWrappper>
        </S.Wrapper>
      </Container>
      <Footer />
    </>
  );
};
