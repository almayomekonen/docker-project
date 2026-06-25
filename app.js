const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require("./config/db");
const usersRoutes = require("./routes/users");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({
    origin: "http://127.0.0.1:5501"
}));

connectDB();

app.get("/", (req, res) => {
    res.send('Welcome to our users management app 🧑🏽‍💻');
})

app.use("/api/users", usersRoutes);

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
