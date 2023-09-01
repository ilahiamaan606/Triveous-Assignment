const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    availability: String,
    categoryId: Number
}, { versionKey: false })

const ProductModel = mongoose.model("product", productSchema);

module.exports = {
    ProductModel
}