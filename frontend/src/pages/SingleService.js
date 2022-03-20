import React from "react";
import { useParams } from "react-router-dom";

const SingleService = () => {
	const { serviceId } = useParams();

	return <div>SingleService id {serviceId}</div>;
};

export default SingleService;
