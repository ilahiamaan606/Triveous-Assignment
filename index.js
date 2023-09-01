const express=require("express");
const {connection}=require("./db")
const {userrouter}=require("./routes/user.routes")

const app=express();

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home Page")
})
app.use("/user",userrouter)

app.listen(8080,async ()=>{
    await connection;
    console.log("Server running at 8080")
})