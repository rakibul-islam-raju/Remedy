import React from "react";
import About from "../components/home/About";
import Contact from "../components/home/Contact";
import Doctors from "../components/home/Doctors";
import Labs from "../components/home/Labs";
import Services from "../components/home/Services";
import Slider from "../components/home/Slider";

const Home = () => {
	return (
		<>
			<section className="flex items-center justify-between flex-wrap">
				<div className="w-full md:w-6/12">
					<About />
				</div>
				<div className="w-full md:w-6/12 order-first md:order-last">
					<Slider />
				</div>
			</section>

			<Services />

			<Doctors />

			<Labs />

			<Contact />
		</>
	);
};

export default Home;
