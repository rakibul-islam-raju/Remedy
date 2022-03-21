const express = require("express");
const mongoose = require("mongoose");

const Appoinment = require("../models/appoinment");

const createAppoinment = async (req, res) => {
	const post = req.body;

	if (!req.userId || !req.isAdmin) {
		return res.status(400).json({ message: "Unauthorized user" });
	}

	const newAppoinment = new Appoinment({ ...post });

	try {
		await newAppoinment.save();
		res.status(201).json({ result: newAppoinment });
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

const listAppoinment = async (req, res) => {
	if (!req.isAdmin) {
		return res.status(400).json({ message: "Unauthorized user" });
	}

	try {
		const appoinments = await Appoinment.find();

		res.status(200).json({ result: appoinments });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const detailAppoinment = async (req, res) => {
	const { id } = req.params;

	if (!req.isAdmin) {
		return res.status(400).json({ message: "Unauthorized user" });
	}

	try {
		const appoiment = await Appoinment.findById(id);

		res.status(200).json({ result: appoiment });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const updateAppoinment = async (req, res) => {
	const { id } = req.params;

	if (!req.isAdmin) {
		return res.status(400).json({ message: "Unauthorized user" });
	}

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send(`No appoinemnt with id: ${id}`);

	const result = await Appoinment.findByIdAndUpdate(
		id,
		{ $set: req.body },
		{ new: true },
		callback // **
	);

	res.status(200).json({ result });
};

const deleteAppoinment = async (req, res) => {
	const { id } = req.params;

	if (!req.isAdmin) {
		return res.status(400).json({ message: "Unauthorized user" });
	}

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send(`No appoinemnt with id: ${id}`);

	await Appoinment.findByIdAndRemove(id);

	res.status(200).json({ message: "Appoinment deleted successfully." });
};

module.exports = {
	createAppoinment,
	listAppoinment,
	detailAppoinment,
	updateAppoinment,
	deleteAppoinment,
};
