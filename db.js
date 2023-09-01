const mongoose=require("mongoose");

const connection=mongoose.connect("mongodb+srv://amaan:amaan@cluster0.gwmzyo8.mongodb.net/TriveousAssignment?retryWrites=true&w=majority")

module.exports={
    connection
}