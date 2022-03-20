import React from "react";
import doctorOne from "../../assets/images/doctor1.jpg";
import doctorTwo from "../../assets/images/doctor2.jpg";

const doctors = [
	{ id: 1, name: "John Doe", image: doctorOne, designation: "Surgon" },
	{ id: 2, name: "John Doe", image: doctorTwo, designation: "Surgon" },
	{ id: 3, name: "John Doe", image: doctorOne, designation: "Surgon" },
];

const Doctors = () => {
	return (
		<section>
			<h4 className="text-center py-16">Our Special Doctors</h4>

			<div className="grid grid-cols-3 gap-4">
				{doctors.map((doc) => (
					<div className="text-center mx-auto" key={doc.id}>
						<img
							className="rounded w-full"
							src={doc.image}
							alt=""
						/>
						<h6 className="text-gray-600">{doc.name}</h6>
						<p className="text-sky-600">{doc.designation}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Doctors;
