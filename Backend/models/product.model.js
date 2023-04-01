const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: String,
    imageTsrc: String,
    rating: Number,
    colors: String,
    price: Number,
    mPrice: Number,
    shape: String,
    gender: String,
    productType: String,
    productId: String,
    quantity: Number,
  },
  {
    versionKey: false,
  }
);

const ProductModel = mongoose.model("product", productSchema);

module.exports = {
  ProductModel,
};
