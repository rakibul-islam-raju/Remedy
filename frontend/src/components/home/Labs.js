import React from "react";
import { Link } from "react-router-dom";
import doctorOne from "../../assets/images/doctor1.jpg";
import doctorTwo from "../../assets/images/doctor2.jpg";

const labs = [
	{
		id: 1,
		name: "Research Laboratories",
		image: doctorOne,
		description:
			"Suspendisse vitae tristique ante. Aliquam erat volutpat. Donec ornare vulputate ",
	},
	{
		id: 2,
		name: "Pathological Laboratories",
		image: doctorTwo,
		description:
			"Suspendisse vitae tristique ante. Aliquam erat volutpat. Donec ornare vulputate ",
	},
	{
		id: 3,
		name: "Biosafety Laboratories",
		image: doctorOne,
		description:
			"Suspendisse vitae tristique ante. Aliquam erat volutpat. Donec ornare vulputate ",
	},
];

const Labs = () => {
	return (
		<section className="py-8">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{labs.map((doc) => (
					<Link to="/" className="flex p-4" key={doc.id}>
						<img
							className="rounded-full h-24 w-24"
							src={doc.image}
							alt=""
						/>
						<div className="text-right">
							<h6 className="mb-2">{doc.name}</h6>
							<p className="">{doc.description}</p>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
};

export default Labs;
