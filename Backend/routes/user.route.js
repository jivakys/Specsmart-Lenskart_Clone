const express = require("express");
const { userPresent } = require("../middleware/user.middleware");
const { UserModel } = require("../models/user.model");
const userRoute = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

userRoute.post("/register", userPresent, async (req, res) => {
  const { firstname, lastname, mobile, email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      const data = new UserModel({
        firstname,
        lastname,
        mobile,
        email,
        password: hash,
      });
      await data.save();
      res.status(200).send({ msg: "User Register Successfully" });
    });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

//LOGIN
userRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          res.status(200).send({
            msg: "Login Successfully",
            token: jwt.sign({ userId: user._id }, "jivak"),
            firstname: user.firstname,
          });
        } else {
          res.status(400).send({ err: "Wrong Credential" });
        }
      });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

userRoute.get("/name", async (req, res) => {
  const { email } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    if (user) {
      console.log(user.firstname, user.lastname, user.email);
      res.status(200).send({
        token: jwt.sign({ userId: user._id }, "jivak"),
      });
    } else {
      res.status(400).send({ err: "Wrong email" });
    }
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

module.exports = { userRoute };
