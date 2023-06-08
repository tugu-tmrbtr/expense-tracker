const dotenv = require("dotenv").config();
const express = require("express");
const session = require("express-session");
const createError = require("http-errors");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT;
const app = express();
const { PrismaClient } = require("@prisma/client");
const { prisma } = require("./app/config/prisma.config");
// const PrismaStore = require("./lib/index")(session);

app.use(cors());
app.use(session());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use((req, res, next) => {
  next(createError.NotFound());
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});
app.get("/", async (req, res, next) => {
  res.send({ message: "Awesome it works 🐻" });
});
app.listen(PORT, () => console.log(`🚀 server started : ${PORT}`));
