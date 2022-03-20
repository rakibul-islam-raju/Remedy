import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
	fullName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const Register = () => {
	const [formData, setFormData] = useState(initialState);

	const { signup, currentUser } = useAuth();
	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// validation
		if (formData.password !== formData.confirmPassword) {
			alert("Password does not match");
			return;
		}
		// console.log("formData =>", formData);
		signup(formData);
	};

	useEffect(() => {
		if (currentUser?.email) {
			navigate("/");
		}
	}, [currentUser, navigate]);

	return (
		<div className="w-full md:w-4/12 mx-auto">
			<h4 className="text-center py-8">Create New Account</h4>

			<form onSubmit={handleSubmit}>
				<div className="mb-2">
					<label htmlFor="fullName" className="form-label">
						Full Name
					</label>
					<input
						required
						value={formData?.fullName}
						onChange={handleChange}
						type="text"
						name="fullName"
						id="fullName"
						placeholder="Full Name"
						className="form-input"
					/>
				</div>
				<div className="mb-2">
					<label htmlFor="email" className="form-label">
						Email Address
					</label>
					<input
						required
						value={formData?.email}
						onChange={handleChange}
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
						required
						value={formData?.password}
						onChange={handleChange}
						type="password"
						name="password"
						id="password"
						placeholder="Password"
						className="form-input"
					/>
				</div>
				<div className="mb-2">
					<label htmlFor="confirmPassword" className="form-label">
						Confirm Password
					</label>
					<input
						required
						value={formData?.confirmPassword}
						onChange={handleChange}
						type="password"
						name="confirmPassword"
						id="confirmPassword"
						placeholder="Confirm Password"
						className="form-input"
					/>
				</div>
				<button type="submit" className="btn w-full">
					Register
				</button>
			</form>

			<p className="mt-3">
				Already have an acccount?
				<Link to="/login" className="text-sky-600">
					{" "}
					Login now.
				</Link>
			</p>
		</div>
	);
};

export default Register;
