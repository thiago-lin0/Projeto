import React, { useContext, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { INFO_PLANS } from "../../querys/index";

import * as S from "./styles";
import { Button, Spinner } from "reactstrap";
import {
	RequestUrlForPaymentData,
	RequestUrlForPaymentVariables,
	REQUEST_URL_FOR_PAYMENT,
} from "../../querys/plans";
import { AuthContext } from "../../contexts/authContexts";
import { toast } from "react-toastify";

type CardProps = {
	actualPlanId: string;
};

const Card = (props: CardProps) => {
	// Props
	const { actualPlanId } = props;

	// Contexts
	const { user } = useContext(AuthContext);

	// States
	const [loading, setLoading] = useState(false);

	// GraphQL
	const { error, data } = useQuery(INFO_PLANS);
	const [requestUrlForPayment] = useMutation<
		RequestUrlForPaymentData,
		RequestUrlForPaymentVariables
	>(REQUEST_URL_FOR_PAYMENT);

	async function handleRequestUrlForPayment({
		description,
		name,
		plan_id,
		price,
		interval,
		sku,
		SoftDescriptor,
	}) {
		setLoading(true);

		try {
			const response = await requestUrlForPayment({
				variables: {
					createUrlJson: {
						company_id: user.company_id,
						description,
						maxNumberOfInstallments: 1,
						name,
						plan_id,
						price,
						recurrent: {
							interval,
						},
						sku,
						SoftDescriptor,
						type: "Recurrent",
						user_id: user.id,
					},
				},
			});

			const url = response.data.createUrl.shortUrl;
			window.open(url);
		} catch (error) {
			console.error(error);
			toast.error("Houve um erro ao requisitar a url para pagamento");
		} finally {
			setLoading(false);
		}
	}

	if (error) {
		return <p>an error occurred</p>
	}
	return (
		<>
			{data?.signatures_plans.map((plan) => (
				<S.Info actualPlan={plan.id === actualPlanId} key={plan.id}>
					{loading ? (
						<Spinner />
					) : (
						<>
							<S.Title>{plan.name}</S.Title>
							<S.Price>
								{plan.price.toLocaleString("pt-br", {
									style: "currency",
									currency: "BRL",
								})}
							</S.Price>
							<S.SubTitle>{plan.description}</S.SubTitle>

							{actualPlanId === plan.id ? (
								<span className="border-0 w-75 mt-4 rounded fs-2 text-center" style={{ fontWeight: 600 }} color="light">
                  Plano Atual
                </span>
							) : (
								<Button
									onClick={() =>
										handleRequestUrlForPayment({
											description: plan.description,
											interval: plan.recurrency_type,
											name: plan.name,
											plan_id: plan.id,
											price: plan.price.toString() + "00",
											sku: plan.sku,
											SoftDescriptor: `${plan.name} - ${plan.description}`,
										})
									}
									className="inside-btn bg-white border-0 w-75 p-3 rounded fs-4"
								>
									Selecionar plano
								</Button>
							)}
						</>
					)}
				</S.Info>
			))}
		</>
	);
};
export default Card;
