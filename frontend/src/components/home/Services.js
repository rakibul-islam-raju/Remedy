import React from "react";
import { Link } from "react-router-dom";
import doctorOne from "../../assets/images/doctor1.jpg";
import doctorTwo from "../../assets/images/doctor2.jpg";

const services = [
	{
		id: 1,
		name: "Health Informatio",
		image: doctorOne,
		description:
			"Suspendisse vitae tristique ante. Aliquam erat volutpat. Donec ornare vulputate ",
	},
	{
		id: 2,
		name: "Online Consultation",
		image: doctorTwo,
		description:
			"Suspendisse vitae tristique ante. Aliquam erat volutpat. Donec ornare vulputate ",
	},
	{
		id: 3,
		name: "Ambulance Service",
		image: doctorOne,
		description:
			"Suspendisse vitae tristique ante. Aliquam erat volutpat. Donec ornare vulputate ",
	},
];

const Services = () => {
	return (
		<section className="py-8">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{services.map((service) => (
					<Link
						to={`/service/${service.id}`}
						className="bg-sky-600 text-white rounded flex p-4"
						key={service.id}
					>
						<img
							className="rounded-full h-24 w-24"
							src={service.image}
							alt=""
						/>
						<div className="text-right">
							<h6 className="text-white mb-2">{service.name}</h6>
							<p className="">{service.description}</p>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
};

export default Services;
