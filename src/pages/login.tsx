import React, { useContext, useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/authContexts";
import { toast } from "react-toastify";
import Router from "next/router";
import { Spinner } from "reactstrap";

import Button from "../components/button";
//estilos
import * as S from "../styles/styles";
import { getCookie } from "../utils/cookies";

interface Login {
	email: string;
	password: string;
}

export default function Login() {
	const errorUser = useRef(null)
	const { register, handleSubmit } = useForm<Login>();
	const { signIn } = useContext(AuthContext);

	const [loading, setLoading] = useState(false);

	async function onSubmit(data) {
		setLoading(true);

		try {
			await signIn(data);
			Router.push("/minhaConta");
		} catch (error) {
			if(!toast.isActive(errorUser.current)){
				errorUser.current = toast.error("Usuário inválido")
			}
		}

		setLoading(false);
	}

	const [token, setToken] = useState(null);

	useEffect(() => {
		setToken(getCookie("nextauth.token"));
		// setToken(document.cookie.indexOf("nextauth.token"));
	}, []);

	if (token) {
		Router.push("/minhaConta");
	} else {
		return (
			<S.ContainerLogin>
				<S.Image
					src="/assets/fundo.png"
					alt="imagem com três notebooks"
				/>
				<S.shadow>
					<S.ConteinerForm onSubmit={handleSubmit(onSubmit)}>
						<h1>Bem-vindo!</h1>
						<h3>Faça seu login</h3>
						<div>
							<input
								type="email"
								placeholder="E-mail"
								name="email"
								{...register("email")}
							/>
							<input
								type="password"
								placeholder="Senha"
								name="password"
								{...register("password")}
							/>
							<Button fullWidth>
								{loading ? <Spinner /> : "Entrar"}
							</Button>
							<p>
								Esqueceu sua senha? <a href="#">Clique aqui</a>
							</p>
						</div>
					</S.ConteinerForm>
				</S.shadow>
			</S.ContainerLogin>
		);
	}
}
