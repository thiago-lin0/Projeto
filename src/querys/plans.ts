import gql from "graphql-tag";

export interface RequestUrlForPaymentData {
	createUrl: {
		shortUrl: string;
	};
}

export interface RequestUrlForPaymentVariables {
	createUrlJson: {
		SoftDescriptor: string;
		company_id: string;
		description: string;
		maxNumberOfInstallments: number;
		name: string;
		plan_id: string;
		price: string;
		recurrent: {
			interval: string;
		};
		sku: string;
		type: "Recurrent";
		user_id: string;
	};
}

export const REQUEST_URL_FOR_PAYMENT = gql`
	mutation requestLinkOfPayment($createUrlJson: SampleInput!) {
		createUrl(json: $createUrlJson) {
			shortUrl
		}
	}
`;

export interface InsertFreePlanVariables {
	companyId: string;
	planId: string;
	endPlanDate: Date;
	startPlanDate: Date;
}

export interface InsertFreePlanData {
	insert_signatures_company_plans: {
		affected_rows: number;
	};
}

export const INSERT_FREE_PLAN = gql`
	mutation selectFreePlan(
		$companyId: uuid!
		$planId: uuid!
		$endPlanDate: date!
		$startPlanDate: date!
	) {
		insert_signatures_company_plans(
			objects: [
				{
					company_id: $companyId
					end_plan_date: $endPlanDate
					plan_id: $planId
					start_plan_date: $startPlanDate
				}
			]
		) {
			affected_rows
		}
	}
`;

export interface GetActualCompanyPlanVariables {
	companyId: string;
}

export interface Plan {
	id: string;
	plan_id: string;
	end_plan_date: Date;
	plan: {
		id: string;
		description: string;
		name: string;
		price: number;
		recurrency_type: string;
	};
}

export interface GetActualCompanyPlanData {
	signatures_company_plans: Plan[];
}

export const GET_ACTUAL_COMPANY_PLAN = gql`
	query getActualCompanyPlan($companyId: uuid!) {
		signatures_company_plans(
			where: { company_id: { _eq: $companyId } }
			order_by: { end_plan_date: desc }
		) {
			id
			plan_id
			end_plan_date
			start_plan_date
			plan {
				id
				description
				name
				price
				recurrency_type
			}
		}
	}
`;
