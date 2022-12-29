import React, { useContext, useEffect, useState } from "react";

//components
import Menu from "../components/menu";
import { Container } from "../components/container";
import Heading from "../components/heading";
import MediaMatch from "../components/mediaMatch";
import Card from "../components/card";
import Button from "../components/button";
import Footer from "../components/footer";

//styles
import * as S from "../styles/styles";
import { useQuery } from "@apollo/client";
import {
	GetActualCompanyPlanData,
	GetActualCompanyPlanVariables,
	GET_ACTUAL_COMPANY_PLAN,
	Plan,
} from "../querys/plans";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/authContexts";
import { getCookie } from "../utils/cookies";

const DURATION = {
  "Monthly": "Mensal",
  "Annual": "Anual",
  "SemiAnnual": "Semestral"
}

export default function Planos() {
  // Contexts
  const { user } = useContext(AuthContext);

  // State
	const [actualPlan, setActualPlan] = useState<Plan>();

	// GraphQL
	const { data, error } = useQuery<
		GetActualCompanyPlanData,
		GetActualCompanyPlanVariables
	>(GET_ACTUAL_COMPANY_PLAN, { variables: { companyId: user?.company_id }});

	// UseEffects
	useEffect(() => {
		if (data) {
			setActualPlan(data.signatures_company_plans[0]);
		}

		if (error) {
			toast.error(
				"Houve um erro ao tentar pegar o plano atual do usuário"
			);
		}
	}, [data, error]);

	return (
		<>
			<Menu userName="teste" />
			<Container>
				<S.Wrapper>
					<Heading>Planos disponíveis</Heading>
					<S.CardWrappper>
						<MediaMatch greaterThan="medium">
							<S.ConteineLeftPlan></S.ConteineLeftPlan>
						</MediaMatch>
						<S.ConteinerWrapper>
							<S.ConteinerCard>
								<MediaMatch greaterThan="small">
									<S.Planos>
										<S.ContainerLeft>
											<S.Title>Plano Atual</S.Title>
											<S.Plan>
												<h2>{actualPlan?.plan.name}</h2>
												<p>{actualPlan?.plan.description}</p>
											</S.Plan>
											<div>
												<p>Duração</p>
												<h2>Valor</h2>
											</div>
										</S.ContainerLeft>
										<S.ContainerRigthPlanos>
											<div></div>
											<div>
												<p>{DURATION[actualPlan?.plan.recurrency_type]}</p>
												<h2>{new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL"}).format(actualPlan?.plan.price)}</h2>
											</div>
										</S.ContainerRigthPlanos>
									</S.Planos>
								</MediaMatch>

								<MediaMatch lessThan="small">
									<S.Mobile>
										<S.TopMobile>
											<S.Title>Plano Atual</S.Title>
											<h2>Boost Reports</h2>
											<p>Plano Mensal</p>
										</S.TopMobile>
										<S.BottomMobile>
											<div>
												<p>Duração</p>
												<h2>Valor</h2>
											</div>
											<div>
												<p>1 mês</p>
												<h2>R$ 1.000.00</h2>
											</div>
										</S.BottomMobile>
										<Button>Alterar pagamento</Button>
									</S.Mobile>
								</MediaMatch>
							</S.ConteinerCard>
							<S.ConteinerPagamento>
								<S.WrapperCard>
									<Card actualPlanId={actualPlan?.plan_id} />
								</S.WrapperCard>
							</S.ConteinerPagamento>
						</S.ConteinerWrapper>
					</S.CardWrappper>
				</S.Wrapper>
			</Container>
			<Footer />
		</>
	);
}
