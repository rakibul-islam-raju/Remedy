import React from "react";

const Appoinment = () => {
	return (
		<div className="flex flex-wrap items-center justify-between">
			<div className="w-full md:w-6/12">
				<h4 className="py-8">Book Your Appoinemt</h4>
				<form>
					<div className="flex flex-wrap justify-between"></div>
					<div className="mb-2">
						<label className="form-label" htmlFor="name">
							Full Name
						</label>
						<input
							required
							type="text"
							name="name"
							id="name"
							placeholder="Full Name"
							className="form-input"
						/>
					</div>
					<div className="flex flex-wrap justify-between">
						<div className="mb-2 w-full md:w-6/12 md:pr-4">
							<label className="form-label" htmlFor="email">
								Email
							</label>
							<input
								required
								type="email"
								name="email"
								id="email"
								placeholder="Email Address"
								className="form-input"
							/>
						</div>
						<div className="mb-2 w-full md:w-6/12">
							<label className="form-label" htmlFor="phone">
								Phone
							</label>
							<input
								required
								type="tel"
								name="phone"
								id="phone"
								placeholder="Phone Number"
								className="form-input"
							/>
						</div>
					</div>
					<div className="flex flex-wrap justify-between">
						<div className="mb-2 w-full md:w-4/12 md:pr-4">
							<label className="form-label" htmlFor="age">
								Age
							</label>
							<input
								required
								type="number"
								name="age"
								id="age"
								placeholder="Age"
								className="form-input"
							/>
						</div>
						<div className="mb-2 w-full md:w-4/12 md:pr-4">
							<label className="form-label" htmlFor="sex">
								Sex
							</label>
							<select
								className="form-input"
								name="sex"
								id="sex"
								required
							>
								<option value="m">Male</option>
								<option value="f">Female</option>
								<option value="o">Other</option>
							</select>
						</div>
						<div className="mb-2 w-full md:w-4/12">
							<label className="form-label" htmlFor="date">
								Date
							</label>
							<input
								type="date"
								name="date"
								id="date"
								className="form-input"
							/>
						</div>
					</div>
					<div className="mb-2">
						<label htmlFor="description">Description</label>
						<textarea
							required
							name="description"
							id="description"
							rows="5"
							className="form-input"
						></textarea>
					</div>
					<button type="submit" className="btn w-full">
						BOOK NOW
					</button>
				</form>
			</div>
			<div className="w-full md:w-6/12">Select Doctor</div>
		</div>
	);
};

export default Appoinment;
