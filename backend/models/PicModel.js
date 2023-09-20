const mongoose=require("mongoose")
const Schema=mongoose.Schema({
    name:String,
    product:String,
    price:String,
    tye:String,
    discription:String,
    picture:String
})
const model=mongoose.model("products",Schema,"products")
module.exports=model