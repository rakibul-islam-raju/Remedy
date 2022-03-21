import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContainer from "./containers/MainContainer";
import DashboardContainer from "./containers/DashboardContainer";
import { Home, SingleService, Appoinment, Login, Register } from "./pages";
import { Dashboard } from "./pages/Dashboard";

const router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainContainer />}>
					<Route path="" element={<Home />} />
					<Route
						path="/service/:serviceId"
						element={<SingleService />}
					/>
					<Route path="/appoinment" element={<Appoinment />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Route>
				<Route path="dashboard" element={<DashboardContainer />}>
					<Route index element={<Dashboard />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default router;
