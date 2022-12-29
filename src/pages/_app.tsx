import { ApolloProvider } from "@apollo/client";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "../contexts/authContexts";
import creatApolloClient from "../services/apolloClient";
import GlobalStyles from "../styles/global";
import theme from "../styles/theme";
import { getCookie } from "../utils/cookies";
import Script from "next/script";

export default function MyApp({ Component, pageProps }: AppProps) {
	const [token, setToken] = useState(null);
	useEffect(() => {
		setToken(getCookie("nextauth.token"));
	}, []);
	const client = creatApolloClient(token);

	return (
		<>
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_TRACKING_ID}`}
			/>
			<Script
				id="google-analytics"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){ dataLayer.push(arguments); }
						gtag('js', new Date());
						gtag('config', '${process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_TRACKING_ID}', {
						page_path: window.location.pathname,
					});
					`,
				}}
			/>
			<AuthProvider>
				<ToastContainer />
				<ApolloProvider client={client}>
					<ThemeProvider theme={theme}>
						<Head>
							<meta
								name="viewport"
								content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
							/>
							<link
								rel="shortcut icon"
								href="/detalhe_logo.ico"
								type="image/ico"
							/>
							<title>Boost Institucional</title>
						</Head>
						<GlobalStyles />
						<NextNProgress
							color="#4a45bd"
							startPosition={0.3}
							stopDelayMs={200}
							height={4}
							showOnShallow={true}
						/>
						<Component {...pageProps} />
					</ThemeProvider>
				</ApolloProvider>
			</AuthProvider>
		</>
	);
}
