import axios from "axios";

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((req) => {
	if (localStorage.getItem("remedy_user_token")) {
		req.headers.Authorization = `Bearer ${JSON.parse(
			localStorage.getItem("remedy_user_token")
		)}`;
	}

	return req;
});
