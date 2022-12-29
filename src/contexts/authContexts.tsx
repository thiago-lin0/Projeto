import React, { createContext, useState, useEffect } from "react";
import api from "../services/api";
import axios from "axios";
// import { setCookie, destroyCookie } from "nookies";
import Router from "next/router";
import { getCookie, setCookie } from "../utils/cookies";

type SignInData = {
	email: string;
	name: string;
	password: string;
	company_name: string;
	avatar: string;
};

type User = {
	id: string;
	email: string;
	name: string;
	password: string;
	company_name: string;
	avatar: string;
	company_id: string;
	users_email: {
		email: string;
	};
};

type AuthContextTupe = {
	isAuthenticated: boolean;
	user: User | null;
	registers: (data: SignInData) => Promise<void>;
	signIn: (data: SignInData) => Promise<void>;
	Logout(): void;
};

export const AuthContext = createContext({} as AuthContextTupe);

export function AuthProvider({ children }) {
	const [user, setUser] = useState<User>();
	const isAuthenticated = !!user;

	async function registers(data: SignInData) {
		const response = await axios.post(
			`${process.env.NEXT_PUBLIC_REPORT_AUTH_SERVER}/register`,
			data
		)
		setCookie("nextauth.token", response.data.access_token, 1);
		api.defaults.headers[
			"Authorization"
		] = `Bearer ${response.data.access_token}`;
	}

	async function signIn(data: SignInData) {
		const response = await axios.post(
			`${process.env.NEXT_PUBLIC_REPORT_AUTH_SERVER}/login`,
			data
		);

		setUser(response.data.user);
		setCookie("@Boost:user", JSON.stringify(response.data.user), 1);
		// localStorage.setItem("@App:user", JSON.stringify(response.data.user));

		setCookie("nextauth.token", response.data.access_token, 1);

		api.defaults.headers[
			"Authorization"
		] = `Bearer ${response.data.access_token}`;
	}

	function Logout() {
		setUser(null);
		localStorage.removeItem("@App:user");
		setCookie("nextauth.token", "", 0);
		Router.push("/");
	}

	useEffect(() => {
		// const storagedUser = localStorage.getItem("@App:user");

		// if (storagedUser) {
		// 	setUser(JSON.parse(storagedUser));
		// }

		const userDataCache = getCookie("@Boost:user");

		if (userDataCache) return setUser(JSON.parse(userDataCache));
	}, []);

	return (
		<AuthContext.Provider
			value={{ isAuthenticated, user, signIn, Logout, registers }}
		>
			{children}
		</AuthContext.Provider>
	);
}
