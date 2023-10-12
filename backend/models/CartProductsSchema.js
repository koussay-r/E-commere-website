const mongoose=require("mongoose")
const Schema=mongoose.Schema({
    productId:String,
    name:String,
    price:String,
    picture:String,
    numberOfThisItem:Number,
})
module.exports=Schema