const mongoose=require("mongoose")
 const Schema=mongoose.Schema({
    name:String,
    lastName:String,
    email:String
 })
 const modelsub=mongoose.model("subscribers",Schema,"subscribers")
 module.exports=modelsub