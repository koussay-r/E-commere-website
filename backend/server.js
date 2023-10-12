const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const cors=require("cors")
const Schema=require("./models/PicModel.js")
const ChartSchema=require("./models/CartProductsSchema.js")
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
const model=mongoose.model("products",Schema,"products")
const CartModel=mongoose.model("chart",ChartSchema,"chart")

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
app.post("/requestProducts",async(req,res)=>{
    try{
        const ress=await model.find({type:req.body.type})
        res.status(200).send(ress)
    }catch(Err){
        console.log(Err)
    }
})
app.post("/addOrRemoveToCartTheSameProduct",async(req,res)=>{
    try{
        const add=await CartModel.findOne({productId:req.body._id})
        if(req.body.encreaseOrDecrease==true){
            add.numberOfThisItem++
        }
        else{
            add.numberOfThisItem--
        }
        add.save()
        res.status(200).send(add)
    }catch(Err){
        console.log(Err);
    }
})

app.post("/addProductToCart",async(req,res)=>{
    const cartDetails={
        productId:"",
        name:"",
        price:"",
        size:"",
        picture:"",
        numberOfThisItem:0
    }
    try{
        const CartData=await CartModel.findOne({productId:req.body._id});
        if(CartData==null){
            const ProductData=await model.findById({_id:req.body._id});
            cartDetails.productId=ProductData._id
            cartDetails.name=ProductData.name
            cartDetails.price=ProductData.price
            cartDetails.size=ProductData.size
            cartDetails.picture=ProductData.image
            cartDetails.numberOfThisItem=req.body.numberOfThisItem;
            const cartDataFilled=await CartModel.create(cartDetails)
            res.status(201).send(cartDataFilled)
        }
        else{
            CartData.numberOfThisItem++
        }
        CartData.save()
        res.status(200).json(CartData);
    }
    catch(err){
        console.log(err);
    }
})
app.get("/fetchCartProducts",async(req, res)=>{
    try{
        const ress=await CartModel.find({})
        res.status(200).send(ress)
    }catch(Err){
        console.log(Err);
    }
})
//Listeners
app.listen(port,()=>{console.log(`listening on port : ${port} `)})