require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
// rotues
const userRoutes = require("./routes/users");
const doctorRoutes = require("./routes/doctors");
const appoinmentRoutes = require("./routes/appoinment");

// db connection
connectDB();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routers
app.use("/api/users", userRoutes); // users
app.use("/api/doctors", doctorRoutes); // doctors
app.use("/api/appoinments", appoinmentRoutes); // appoinments

// hello world
app.get("/", (req, res) => {
	res.json("hello World!");
});

// port
const PORT = process.env.PORT || 8000;

// server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
