const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const cors=require("cors")
const model=require("./models/PicModel.js")
const modelsub=require("./models/SubscribeFormModel.js")
const bodyParser=require("body-parser")
dotenv.config()
//app config
const app=express()
const port=process.env.PORT || 9000
const connectUrl=`mongodb+srv://admin:${process.env.PASSWORD}@cluster0.yde1grw.mongodb.net/mdlrShop?retryWrites=true&w=majority`
//MiddleWares
app.use(express.json())
mongoose.set('strictQuery', true)
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors());
//db conifg 

mongoose.connect(connectUrl,{
    useNewUrlParser:true
})
// Api endpoints
app.get("/",(req,res)=>{
    res.send("works !")
})
app.get("/products",async(req,res)=>{
    try{
        const ress=await model.find({})
        res.status(200).send(ress)
    }
    catch(err){
        console.log(err)
    }
})
app.post("/ProductDetails",async(req,res)=>{
    try{
        const ress=await model.find({_id:req.body._id})
        res.status(200).send(ress)
    }
    catch(err){
        console.log(err)
    }
})
app.post("/subscribe",async(req,res)=>{
    try{
        const ress=await modelsub.create(req.body)
        res.status(201).send(ress)
    }catch(err){
        console.log(err)
    }
})
//Listeners
app.listen(port,()=>{console.log(`listening on port : ${port} `)})