const express = require("express");
const { ProductModel } = require("../models/product.model")

const productrouter = express.Router();

productrouter.get("/", async (req, res) => {
    try {
        const products = await ProductModel.find();

        res.send(products)

    } catch (error) {
        res.send({ "msg": "something went wrong", error: error.message })
    }


})

productrouter.post("/add", async (req, res) => {
    try {
        ProductModel.insertMany(req.body);
        res.send({ "msg": "Product Created" })

    } catch (error) {
        res.send({ "msg": "something went wrong", error: error.message })
    }



})

productrouter.get("/:_id", async (req, res) => {

    try {
        const product = await ProductModel.findById(req.params);
        res.send(product)

    } catch (error) {
        res.send({ "msg": "something went wrong", error: error.message })
    }


})

module.exports = {
    productrouter
}