import Link from "next/link";
import { useRef, useState, useEffect, useContext } from "react";
import { useForm, SubmitHandler, useFormState } from "react-hook-form";
import { AuthContext } from "../contexts/authContexts";
import { toast, ToastContainer } from "react-toastify";
import Router from "next/router";
import "react-toastify/dist/ReactToastify.min.css";


//components
import { Container } from "../components/container";
import Menu from "../components/menu";
import Heading from "../components/heading";
import Button from "../components/button";
import Footer from "../components/footer";
import MediaMatch from "../components/mediaMatch";
//styles
import * as S from "../styles/styles";

interface Perfil {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	avatar: string;
	company_name: string;
}

const criarConta = () => {
	const errorUser = useRef(null)
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Perfil>();
	const { registers, signIn} = useContext(AuthContext);

	async function onSubmit(data) {

		try {
			await registers(data);
			await signIn(data);
			toast.success("usuario cadastrado com sucesso");
			Router.push("/pagamento");		
		} catch (error) {
			if(!toast.isActive(errorUser.current)){
				errorUser.current = toast.error("Usuário inválido")
			}
		}
	
	}

	const password = useRef({});
	password.current = watch("password", "");

	const [selectedFile, setSelectedFile] = useState<File | null>(null);

	return (
		<>
			<Menu />
			<Container>
				<S.Wrapper>
					<Heading>Criar Conta</Heading>
					<S.CardWrappper>
						<MediaMatch greaterThan="small">
							<S.ConteineLeftrWrapper></S.ConteineLeftrWrapper>
						</MediaMatch>
						<S.ConteinerCard>
							<S.Title>Criar Conta</S.Title>
							<S.Form onSubmit={handleSubmit(onSubmit)}>
								<MediaMatch lessThan="medium">
									<S.LabelMinhaConta>
										<input
											{...register("avatar")}
											type="file"
											accept="image/png, image/jpeg"
											onChange={(
												e: React.ChangeEvent<HTMLInputElement>
											) => {
												if (!e.target.files) return;
												setSelectedFile(
													e.target.files[0]
												);
											}}
										/>
										{selectedFile === null ? (
											<img
												src="/assets/cam.png"
												alt="imagem de camera"
												style={{ borderRadius: "0px" }}
											/>
										) : (
											<img
												src={URL.createObjectURL(
													selectedFile
												)}
												alt="foto do perfil"
											/>
										)}
									</S.LabelMinhaConta>
								</MediaMatch>
								<div>
									<S.Label>
										Nome
										<input
											type="text"
											placeholder="Nome do usuário"
											{...register("name", {
												required: true,
											})}
										/>
									</S.Label>
									<S.Label>
										Nome da Companhia
										<input
											type="text"
											placeholder="Nome da companhia"
											{...register("company_name", {
												required: true,
											})}
										/>
									</S.Label>
									<S.Label>
										E-mail
										<input
											type="text"
											placeholder="E-mail"
											{...register("email", {
												pattern:
													/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
											})}
											required
										/>
									</S.Label>
									<S.Label>
										Senha
										<input
											type="password"
											placeholder="Senha"
											{...register("password", {
												required: true,
											})}
										/>
									</S.Label>
									<S.Label>
										Confirmar senha
										<input
											type="password"
											placeholder="Confirme sua Senha"
											{...register("confirmPassword", {
												validate: (value) =>
													value === password.current,
											})}
											required
										/>
										{errors.confirmPassword && (
											<span>
												{" "}
												As senhas não são iguais
											</span>
										)}
									</S.Label>
									<S.ButtonCriarConta>
										<Button fullWidth type="submit">
											Ir para pagamento
										</Button>
									</S.ButtonCriarConta>
								</div>
								<S.ContainerRigth>
									<MediaMatch greaterThan="medium">
										<S.LabelMinhaConta>
											<input
												{...register("avatar")}
												type="file"
												accept="image/png, image/jpeg"
												onChange={(
													e: React.ChangeEvent<HTMLInputElement>
												) => {
													if (!e.target.files) return;
													setSelectedFile(
														e.target.files[0]
													);
												}}
											/>
											{selectedFile === null ? (
												<img
													src="/assets/cam.png"
													alt="imagem de camera"
													style={{
														borderRadius: "0px",
													}}
												/>
											) : (
												<img
													src={URL.createObjectURL(
														selectedFile
													)}
													alt="foto do perfil"
												/>
											)}
										</S.LabelMinhaConta>
									</MediaMatch>
								</S.ContainerRigth>
							</S.Form>
						</S.ConteinerCard>
					</S.CardWrappper>
				</S.Wrapper>
			</Container>
			<Footer />
		</>
	);
};

export default criarConta;
