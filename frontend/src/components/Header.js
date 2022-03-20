import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
	const { currentUser, logout } = useAuth();

	return (
		<header className="py-4 bg-sky-600 text-white">
			<nav className="wrapper flex flex-wrap justify-between items-center">
				<Link to="/" className="text-white text-4xl font-semibold">
					Remedy+
				</Link>
				<ul className="flex items-start flex-wrap space-x-4 font-semibold ">
					<li>
						<Link to="/">Doctors</Link>
					</li>
					<li>
						<Link to="/">Departments</Link>
					</li>
					<li>
						<Link to="/">Labs</Link>
					</li>
					<li>
						{!currentUser?.email ? (
							<Link
								to="/login"
								className="bg-white text-sky-600 font-semibold rounded px-4 py-2"
							>
								Login
							</Link>
						) : (
							<button
								className="bg-white text-sky-600 font-semibold rounded px-4 py-2"
								onClick={logout}
							>
								Logout
							</button>
						)}
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
