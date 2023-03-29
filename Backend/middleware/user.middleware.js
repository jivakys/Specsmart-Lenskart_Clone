let jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");

const userPresent = async (req, res, next) => {
  const { email } = req.body;
  const isPresent = await UserModel.findOne({ email });
  if (isPresent) {
    res.status(200).send({ msg: "User already exist, Please login" });
  } else {
    next();
  }
};

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    var decoded = jwt.verify(token, "jivak");
    if (decoded) {
      req.body.userId = decoded.userId;
      next();
    } else {
      res.status(400).send({ msg: "Invalid token" });
    }
  } else {
    res.status(400).send({ msg: "Please Login First" });
  }
};

module.exports = { userPresent, auth };
