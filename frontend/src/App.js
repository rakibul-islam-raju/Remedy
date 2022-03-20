import React from "react";
import Router from "./router";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
	return (
		<AuthProvider>
			<Router />
		</AuthProvider>
	);
};

export default App;
