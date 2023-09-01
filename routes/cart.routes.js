const express = require("express");
const { CartModel } = require("../models/cart.model")
const {authorization}=require("../middleware/authorization")
const jwt = require("jsonwebtoken");

const cartrouter = express.Router();

cartrouter.use(authorization)

cartrouter.get("/", async (req, res) => {
    try {
        

        const cartitems = await CartModel.find({ userid:req.body.userid });

        res.send(cartitems);
    } catch (error) {
        res.send({ "msg": "something went wrong", error: error.message });
    }
});

cartrouter.post("/add", async (req, res) => {
    try {
        

        let cartitem = await CartModel.find({ productid: req.body.productid });

        if (!cartitem[0]) {
            await CartModel.insertMany(req.body);
            res.status(201).send("Item is added in cart");
        } else {
            res.status(400).send("Item already present in the cart");
        }
    }
    catch (error) {
        res.send({ "msg": "something went wrong", error: error.message })
    }
})

cartrouter.patch("/updateQuantity/:_id", async (req, res) => {
    try {
        
        await CartModel.findByIdAndUpdate(req.params, { quantity: req.body.quantity })
        res.status(200).send("Quantity updated successfully");
    }
    catch (error) {
        
        res.send({ "msg": "something went wrong", error: error.message })
    }
})

cartrouter.delete("/deleteItem/:_id", async (req, res) => {
    try {
        
        await CartModel.findByIdAndDelete(req.params)
        res.status(200).send("Item deleted");
    }
    catch (error) {
        res.send({ "msg": "something went wrong", error: error.message })
    }
})

module.exports = {
    cartrouter
}