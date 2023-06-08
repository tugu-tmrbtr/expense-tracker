const { prisma } = require("../config/prisma.config");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  let emailCheck;
  try {
    emailCheck = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  } catch (error) {
    res
      .status(400)
      .send([{ instancePath: "Email Avaibility", message: error }]);
  }
  if (emailCheck) {
    res
      .status(500)
      .send([{ instancePath: "Email", message: "Email Already Taken" }]);
  } else {
    const salt = 10;
    let salted_password = await bcrypt.hash(password, salt);
    let newUser;
    try {
      newUser = await prisma.user.create({
        data: {
          email: email,
          password: salted_password,
          firstname: "",
          lastname: "",
        },
      });
    } catch (error) {
      res.status(500).send([{ instancePath: "Error", message: error }]);
      return;
    }
    try {
      await prisma.wallet.create({
        data: {
          userId: newUser?.id,
        },
      });
      res.status(200).send("Ok");
    } catch (error) {
      res.status(400).send(error);
      return;
    }
  }
});
const loginUser = asyncHandler(async (req, res) => {
  if (req.session.userId) {
    res.status(500).send("You are logged in!");
  }
  let user;
  const { email, password } = req.body;
  try {
    user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (isPasswordCorrect) {
      req.session.userId = user.id;
      res.status(200).send("Authorized");
    } else {
      res.status(401).send("Wrond Creds");
    }
  } catch {
    if (!user) {
      res.status(401).send("Wrond Creds");
      return;
    }
  }
});
const logoutUser = asyncHandler(async (req, res) => {
  if (req.session.userId) {
    req.session.destroy();
    res.clearCookie("sess").status(200).send("Cleared Cookie");
  } else {
    res.status(401).send("You are not logged in!");
  }
});
const getUser = asyncHandler(async (req, res) => {
  if (req.session.userId) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: req.session.userId,
        },
      });
      if (!user) res.status(401).json("User not found");
      const data = {
        email: user.email,
        userId: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
      };
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(500).send("Please Login!");
  }
});

module.exports = { createUser, loginUser, logoutUser, getUser };
