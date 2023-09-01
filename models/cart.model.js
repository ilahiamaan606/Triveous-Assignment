const mongoose=require("mongoose");

const cartSchema=mongoose.Schema({
    "productid": { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
    "quantity": { type: Number, default: 1 },
    "userid": { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
}, { versionKey: false })

const CartModel=mongoose.model("cart",cartSchema);

module.exports={CartModel}