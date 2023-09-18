const mongoose=require("mongoose")
const Schema=mongoose.Schema({
    picture:String
})
const model=mongoose.model("products",Schema,"products")
module.exports=model