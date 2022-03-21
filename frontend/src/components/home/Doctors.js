import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../utils/api";
import { doctorUrl } from "../../utils/urls";
import doctorImage from "../../assets/images/doctor.png";

const Doctors = () => {
	const [doctors, setDoctors] = useState([]);

	useEffect(() => {
		const asyncData = async () => {
			const { data } = await axiosInstance.get(`${doctorUrl}`);
			setDoctors(data);
		};
		asyncData();
	}, []);

	return (
		<section>
			<h4 className="text-center py-16">Our Special Doctors</h4>

			<div className="grid grid-cols-3 gap-4">
				{doctors?.length > 0 &&
					doctors?.map((doc) => (
						<div className="text-center mx-auto" key={doc.id}>
							<img
								className="rounded w-full"
								src={doctorImage}
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
