const mongoose=require("mongoose")
const Schema=mongoose.Schema({
    name:String,
    product:String,
    price:String,
    type:String,
    discription:String,
    picture:String
})
module.exports=Schema