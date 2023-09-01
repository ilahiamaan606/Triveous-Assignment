const express=require("express");
const {connection}=require("./db")
const {userrouter}=require("./routes/user.routes")
const {cartrouter}=require("./routes/cart.routes")
const {productrouter}=require("./routes/product.routes")

const app=express();

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home Page")
})
app.use("/user",userrouter)
app.use("/cart",cartrouter)
app.use("/product",productrouter)

app.listen(8080,async ()=>{
    await connection;
    console.log("Server running at 8080")
})