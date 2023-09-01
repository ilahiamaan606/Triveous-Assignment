const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    "items": [mongoose.Schema.Types.Mixed],
    "userid": { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    "orderdate": { type: Date, default: null }
})

const OrderModel = mongoose.model("order", orderSchema);

module.exports = { OrderModel };