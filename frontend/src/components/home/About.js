import React from "react";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<section>
			<h3>Remedy Plus.</h3>
			<p className="text-gray-600 mt-3 pr-4 mb-6">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
				nobis iusto eveniet adipisci, harum magnam eaque temporibus
				esse, maiores nemo natus aliquid distinctio! harum magnam eaque
				temporibus esse, maiores nemo natus aliquid distinctio!
			</p>

			<Link to="/appoinment" className="btn">
				Book Appoinment
			</Link>
		</section>
	);
};

export default About;
