const express = require("express");
const { ProductModel } = require("../models/product.model");

const productRouter = express.Router();

productRouter.use(express.json());

productRouter.get("/", async (req, res) => {
  try {
    const product = await ProductModel.find();
    res.status(200).send(product);
  } catch (err) {
    res.send({ msg: err.message });
  }
});

productRouter.get("/model", async (req, res) => {
  const filters = {};
  // Apply filters based on query parameters
  if (req.query.shape) {
    filters.shape = { $regex: req.query.shape, $options: "i" };
  }

  if (req.query.colors) {
    filters.colors = { $regex: req.query.colors, $options: "i" };
  }
  // if (req.query.price) {
  //   filters.price = { $regex: req.query.price, $options: "i" };
  // }
  const data = await ProductModel.find(filters).sort({
    price: req.query.price === "asc" ? 1 : -1,
  });
  res.send(data);
});

productRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const newProduct = new ProductModel(payload);
    await newProduct.save();
    res.status(200).send({ message: "New Products successfully Added" });
  } catch (err) {
    console.log("err=", err);
    res.status(400).send({ msg: err });
  }
});

productRouter.get("/sorting", async (req, res) => {
  try {
    const { sort } = req.query;
    const query = ProductModel.find();
    if (sort === "asc") {
      query.sort({ rating: 1 });
    } else if (sort === "dsc") {
      query.sort({ rating: -1 });
    } else if (sort === "lowtohigh") {
      query.sort({ price: 1 });
    } else if (sort === "hightolow") {
      query.sort({ price: -1 });
    }

    const data = await query.exec();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = { productRouter };
