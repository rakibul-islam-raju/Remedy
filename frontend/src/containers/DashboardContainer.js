import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DashboardContainer = () => {
	return (
		<>
			<Header />
			<main className="wrapper">
				<div className="min-h-screen">
					<Outlet />
				</div>
			</main>
			<Footer />
		</>
	);
};

export default DashboardContainer;
