const mongoose=require("mongoose")
const Schema=mongoose.Schema({
    productId:String,
    name:String,
    price:String,
    size:String,
    picture:String,
    numberOfThisItem:Number,
})
module.exports=Schema