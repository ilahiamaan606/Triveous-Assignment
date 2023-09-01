const express = require("express");
const { CartModel } = require("../models/cart.model")
const jwt = require("jsonwebtoken");

const cartrouter = express.Router();

cartrouter.get("/", async (req, res) => {
    try {
        let { token } = req.headers;

        if (!token) {
            return res.send({ "msg": "Please login first" });
        }

        const decoded = jwt.verify(token, 'shhhhh');
        const userid = decoded.userid;

        const cartitems = await CartModel.find({ userid });

        res.send(cartitems);
    } catch (error) {
        res.send({ "msg": "something went wrong", error: error.message });
    }
});

cartrouter.post("/add", async (req, res) => {
    try {
        let { token } = req.headers;

        if (!token) {
            return res.send({ "msg": "Please login first" });
        }

        const decoded = jwt.verify(token, 'shhhhh');
        const userid = decoded.userid;

        let cartitem = await CartModel.find({ productid: req.body.productid });
        req.body.userid=userid;

        if (!cartitem[0]) {
            await CartModel.insertMany(req.body);
            res.status(201).send("Item is added in cart");
        } else {
            res.status(400).send("Item already present in the cart");
        }
    }
    catch (err) {
        res.status(500).send("Internal Server Error");
    }
})

cartrouter.patch("/updateQuantity/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let updatedQuantity = req.body.quantity;
        await CartModel.findByIdAndUpdate({ "_id": id }, { "quantity": updatedQuantity })
        res.status(200).send("Quantity updated successfully");
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
})

cartrouter.delete("/deleteItem/:id", async (req, res) => {
    try {
        let id = req.params.id;
        await CartModel.findByIdAndDelete(id)
        res.status(200).send("Item deleted");
    }
    catch (err) {
        res.status(500).send("Internal Server Error");
    }
})

module.exports = {
    cartrouter
}