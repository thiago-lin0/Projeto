import React  from "react";
import { useRef, useState, useEffect, useContext } from "react";
import Card from "../components/card";
import { Container } from "../components/container";
import Footer from "../components/footer";
import Heading from "../components/heading";
import MediaMatch from "../components/mediaMatch";
import Menu from "../components/menu";
import * as S from "../styles/styles";

export default function Pagamento() {

	return  (	
		<>
			<Menu userName="cliente" />
			<Container>
				<S.Wrapper>
					<Heading>Pagamento</Heading>
					<S.CardWrappper>
						<MediaMatch greaterThan="medium">
							<S.ConteineLeftrWrapper></S.ConteineLeftrWrapper>
						</MediaMatch>
						<S.ConteinerPagamento>
							<S.WrapperPagamento>
								<Card actualPlanId="cliente" />
							</S.WrapperPagamento>
						</S.ConteinerPagamento>
					</S.CardWrappper>
				</S.Wrapper>
			</Container>
			<Footer />
		</>
	);
}
