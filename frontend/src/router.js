import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContainer from "./containers/MainContainer";
import { Home, SingleService, Appoinment, Login } from "./pages";

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
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default router;
