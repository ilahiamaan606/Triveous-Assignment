const express=require("express");
const { CartModel } = require("../models/cart.model");
const {OrderModel}=require("../models/order.model")
const {authorization}=require("../middleware/authorization")

const orderrouter=express.Router();

orderrouter.use(authorization)

orderrouter.post("/placeorder", async (req, res) => {
    try {

        let cartitems = await CartModel.find({ userid: req.body.userid });
        // console.log(cartitems)
        
        let order = new OrderModel({
            items: cartitems,
            userid: req.body.userid,
            orderdate: new Date().toISOString().split("T")[0]
        });

        await order.save();
        // console.log(data);
        res.status(201).json({ "msg": "Order is placed successfully" });
        
    } catch (error) {
        res.send({ "msg": "something went wrong", error: error.message })
    }
});

orderrouter.get("/orderhistory", async (req, res) => {
    try {
        let data = await OrderModel.find({ userID: req.body.userID });
        res.status(200).json(data);
    }
    catch (error) {
        res.send({ "msg": "something went wrong", error: error.message })
    }
})

orderrouter.get("/orderdetail/:id", async (req, res) => {
    let id = req.params.id;
    try {
        let data = await OrderModel.find({ "_id": id });
        if (data.length) {
            res.status(200).json(data);
        } else {
            res.status(404).send("Order not found");
        }
    } catch (error) {
        res.send({ "msg": "something went wrong", error: error.message })
    }
});

module.exports={
    orderrouter
}