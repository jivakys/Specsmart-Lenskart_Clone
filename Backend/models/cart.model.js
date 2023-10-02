const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
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
    userId: String,
  },
  {
    versionKey: false,
  }
);
const CartModel = mongoose.model("cart", cartSchema);

module.exports = {
  CartModel,
};
