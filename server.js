const express = require("express");
const app = express();

require("dotenv").config();

let dbConnect = require("./dbConnect");

//importing route data
const userRoutes = require("./routes/userRoutes");
// const authRoutes = require("./routes/authRoutes");

app.use(express.json()); //auto parses json data for us with this line

//using base route from userRoutes
app.use("/api/users", userRoutes);
// app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  //sets up test route to see if app is running
  res.json({ message: "Hello world, this is an express-mysql app." });
});

const PORT = process.env.PORT || 8000; //sets up the port that app will utilize

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}.`);
});
