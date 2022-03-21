const express = require("express");
const mongoose = require("mongoose");

const Doctor = require("../models/doctor");

const createDoctor = async (req, res) => {
	const post = req.body;

	const newDoctor = new Doctor({ ...post });

	try {
		await newDoctor.save();
		res.status(201).json({ result: newDoctor });
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

const listDoctor = async (req, res) => {
	try {
		const doctors = await Doctor.find();

		res.status(200).json({ result: doctors });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const detailDoctor = async (req, res) => {
	const { id } = req.params;

	try {
		const doctor = await Doctor.findById(id);

		res.status(200).json({ result: doctor });
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const updateDoctor = async (req, res) => {
	const { id } = req.params;
	const { fullName, designation, description } = req.body;

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send(`No doctor with id: ${id}`);

	const updatedDoctor = {
		fullName,
		designation,
		description,
	};

	await Doctor.findByIdAndUpdate(id, updatedDoctor, { new: true });

	res.status(200).json({ result: updatedDoctor });
};

const deleteDoctor = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send(`No doctor with id: ${id}`);

	await Doctor.findByIdAndRemove(id);

	res.status(200).json({ message: "Doctor deleted successfully." });
};

module.exports = {
	createDoctor,
	listDoctor,
	detailDoctor,
	updateDoctor,
	deleteDoctor,
};
