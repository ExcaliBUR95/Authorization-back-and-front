require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(require("./routes/users.route"));
app.use(require("./routes/todo.route"));

mongoose.connect(process.env.MONGO_SERVER);

app.listen(process.env.PORT, () => console.log("Connected...+1"));
