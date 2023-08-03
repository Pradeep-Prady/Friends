const express = require("express");
const app = express();

const errorMidleware = require("./middlewares/error");
const cookieParser = require("cookie-parser");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.join(__dirname, "config/config.env") });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const auth = require("./routes/auth");
const gang = require("./routes/gang");
const usergang = require("./routes/userGang");

const chat = require("./routes/chat");
const review = require("./routes/review");

app.use("/api/v1", auth);
app.use("/api/v1/", chat);
app.use("/api/v1", gang);
app.use("/api/v1", usergang);
app.use("/api/v1/", review);

app.use(errorMidleware);

module.exports = app;
