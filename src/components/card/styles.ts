import styled from "styled-components";

export const Info = styled.div`
	width: 26.4rem;
	height: 29.1rem;
	color: ${(props: { actualPlan: boolean }) =>
		props.actualPlan ? "#fff" : "#333"};
	background-color: ${(props: { actualPlan: boolean }) =>
		props.actualPlan ? "#4a45bd" : "#fff"};
	box-shadow: 0rem 0.4rem 1.2rem rgba(0, 0, 0, 0.25);
	border-radius: 1.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	margin-bottom: 5rem;
	transition: 0.3s;

	&:last-child {
		margin-bottom: 0rem;
	}

	&:hover {
		background-color: #4a45bd;
		color: #fff;

		.inside-btn {
			opacity: 1;
			color: #4a45bd;
		}
	}

	.inside-btn {
		opacity: 0;
		font-weight: 600;
		cursor: pointer;
	}
`;
export const Title = styled.h2`
	font-weight: 600;
	font-size: 1.8rem;
	line-height: 2.2rem;
`;
export const Price = styled.h3`
	display: flex;
	font-weight: 600;
	font-size: 2.4rem;
	line-height: 2.9rem;
`;
export const SubTitle = styled.p`
	font-family: "Inter";
	line-height: 1.8rem;
`;
