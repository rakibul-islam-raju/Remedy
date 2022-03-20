import React, { useContext, useEffect, useState } from "react";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [loding, setLoding] = useState(true);
	const [currentUser, setCurrentUser] = useState({});
	const [authToken, setAuthToken] = useState();

	// useEFfect
	useEffect(() => {
		const remedy_user = localStorage.getItem("remedy_user")
			? JSON.parse(localStorage.getItem("remedy_user"))
			: null;
		const remedy_user_token = localStorage.getItem("remedy_user_token")
			? JSON.parse(localStorage.getItem("remedy_user_token"))
			: null;

		if (remedy_user && remedy_user_token) {
			setCurrentUser(remedy_user);
			setAuthToken(remedy_user_token);
		}

		setLoding(false);
	}, []);

	// signup
	async function signup(email, password) {
		setCurrentUser({});
	}

	// google login
	async function loginWithGoogle(res) {
		const result = await res?.profileObj;
		const token = await res?.tokenId;

		setCurrentUser(result);
		setAuthToken(token);

		localStorage.setItem("remedy_user", JSON.stringify(result));
		localStorage.setItem("remedy_user_token", JSON.stringify(token));
	}

	// login
	async function login(email, password) {}

	// logout
	function logout() {
		setCurrentUser({});
		localStorage.removeItem("remedy_user");
		localStorage.removeItem("remedy_user_token");
	}

	const value = {
		currentUser,
		authToken,
		signup,
		loginWithGoogle,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loding && children}
		</AuthContext.Provider>
	);
}
