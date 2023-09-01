const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    availability: { type: Boolean, default: true },
    categoryId: Number
}, { versionKey: false })

const ProductModel = mongoose.model("product", productSchema);

module.exports = {
    ProductModel
}