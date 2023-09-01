const express=require("express");
require("dotenv").config();
const {connection}=require("./db")
const {userrouter}=require("./routes/user.routes")
const {cartrouter}=require("./routes/cart.routes")
const {productrouter}=require("./routes/product.routes")
const {orderrouter}=require("./routes/order.routes")

const app=express();

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home Page")
})
app.use("/user",userrouter)
app.use("/cart",cartrouter)
app.use("/product",productrouter)
app.use("/order",orderrouter)

app.listen(process.env.port,async ()=>{
    await connection;
    console.log(`Server running at ${process.env.port}`)
})