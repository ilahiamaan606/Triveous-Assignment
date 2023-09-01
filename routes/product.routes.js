const express=require("express");
const {ProductModel}=require("../models/product.model")

const productrouter=express.Router();

productrouter.get("/",async (req,res)=>{
    
    const products=await ProductModel.find();

    res.send(products)
})

productrouter.get("/:_id",async (req,res)=>{
    
    const product=await ProductModel.findbyId(req.params);

    res.send(product)
})

module.exports={
    productrouter
}