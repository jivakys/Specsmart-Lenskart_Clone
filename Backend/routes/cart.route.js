const express = require("express");
const { CartModel } = require("../models/cart.model");
const cartRouter = express.Router();

// save
cartRouter.post("/addCard", async (req, res) => {
  const payload = req.body;
  try {
    const new_cart = new CartModel(payload);
    await new_cart.save();
    res.status(201).send("add new cartItems");
  } catch (err) {
    // console.log(err);
    res.status(500).send({ msg: "Something went wrong" });
  }
});

cartRouter.get("/show", async (req, res) => {
  let query = req.query;
  try {
    const carts = await CartModel.find(query);
    res.status(200).send(carts);
  } catch (error) {
    // console.log(err);
    res.status(500).send({ err: "Something went wrong" });
  }
});

cartRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await CartModel.findByIdAndDelete({ _id: id });
    res.json({ status: 200, message: "Deleted The cartItem" });
  } catch {
    // console.log("err :", err);
    res.send({ msg: err });
  }
});

cartRouter.patch("/update/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await CartModel.findByIdAndUpdate({ _id: id });
    res.json({ status: 200, message: "updated The cartItem" });
  } catch {
    // console.log("err :", err);
    res.send({ msg: err });
  }
});

module.exports = { cartRouter };
