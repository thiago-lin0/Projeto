import { gql } from "@apollo/client";

export const INFO_PLANS = gql`
	query GetPlans {
		signatures_plans {
			id
			description
			name
			price
			sku
			recurrency_type
		}
	}
`;
