import axios from "axios";

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_REPORT_AUTH_SERVER,
});

export default api;
