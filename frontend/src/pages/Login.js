import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const { loginWithGoogle, currentUser } = useAuth();
	const navigate = useNavigate();

	const googleSuccess = async (res) => {
		await loginWithGoogle(res);
	};

	const googleFailure = (error) => {
		console.log("error =>", error);
	};

	useEffect(() => {
		if (currentUser?.email) {
			navigate("/");
		}
	}, [currentUser, navigate]);

	return (
		<div className="w-full md:w-4/12 mx-auto">
			<h4 className="text-center py-8">Login</h4>
			<GoogleLogin
				className="w-full rounded mt-3 text-center"
				clientId={`${process.env.REACT_APP_OAUTH_CLIENT_ID}`}
				onSuccess={googleSuccess}
				onFailure={googleFailure}
				cookiePolicy={"single_host_origin"}
			/>
			<div className="py-4 text-lg text-center text-gray-600">or</div>
			<form>
				<div className="mb-2">
					<label htmlFor="email" className="form-label">
						Email Address
					</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Email Address"
						className="form-input"
					/>
				</div>
				<div className="mb-2">
					<label htmlFor="email" className="form-label">
						Password
					</label>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Password"
						className="form-input"
					/>
				</div>
				<button type="submit" className="btn w-full">
					LOGIN
				</button>
			</form>
		</div>
	);
};

export default Login;
