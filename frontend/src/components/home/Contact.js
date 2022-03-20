import React from "react";

const Contact = () => {
	return (
		<section>
			<form className="w-8/12 mx-auto  p-12 rounded shadow">
				<h4 className="text-center  pb-4">Contact Us</h4>
				<hr className="pb-4" />
				<div className="mb-2">
					<label htmlFor="name" className="form-label">
						Full Name
					</label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Full Name"
						className="form-input"
					/>
				</div>
				<div className="mb-2">
					<label htmlFor="name" className="form-label">
						Email Address
					</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Em@il Address"
						className="form-input"
					/>
				</div>
				<div className="mb-2">
					<label htmlFor="name" className="form-label">
						Message
					</label>
					<textarea
						type="text"
						name="message"
						id="message"
						placeholder="Your message..."
						rows="5"
						className="form-input"
					></textarea>
				</div>
				<button className="btn w-full">SUBMIT</button>
			</form>
		</section>
	);
};

export default Contact;
