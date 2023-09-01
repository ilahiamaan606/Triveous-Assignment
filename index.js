const express=require("express");
const {connection}=require("./db")

const app=express();

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.listen(8080,async ()=>{
    await connection;
    console.log("Server running at 8080")
})