require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
// rotues
// const newsRoutes = require("./routes/newsRoutes");
const userRoutes = require("./routes/users");
// const eventRoutes = require("./routes/eventRoutes");

// db connection
connectDB();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routers
// app.use("/api/news", newsRoutes); // news
app.use("/api/users", userRoutes); // users
// app.use("/api/events", eventRoutes); // users

// hello world
app.get("/", (req, res) => {
	res.send("hello World!");
});

// port
const PORT = process.env.PORT || 8000;

// server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
