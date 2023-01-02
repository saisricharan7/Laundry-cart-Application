const router = require("express").Router();
const Orders= require("../models/order_M");
var jwt = require('jsonwebtoken')
const bodyparser= require("body-parser");
const Auth= require("../middleware/auth");

router.use(bodyparser.json());

router.post('/create', async(req,res)=>{
    try{
        // const {user,order_id,date_time,store_location,city,store_phone,
        // total_items,price,status,items}=req.body
        const newOrder= await Orders({
            user: req.body.user,
            order_id:req.body.order_id,
            date_time:req.body.date_time,
            store_location:req.body.store_location,
            city:req.body.city,
            store_phone:req.body.store_phone,
            total_items:req.body.total_items,
            price:req.body.price,
            status:req.body.status,
            items:req.body.items

        // order_id,date_time,store_location,city,store_phone,
        // total_items,price,status,items

        })
        await newOrder.save()
        res.status(200).json({
        status:"order created",
        data:newOrder
        })
   
    }
    catch(e){
        res.status(403).json({
        status:"failure",
        message:e.message
       })
    }
});




router.post('/get_orders',Auth,async(req,res)=>{
  
    try{
        const {email} = res.user
      // const decoded =  jwt.verify(token,process.env.JWT_SECRET_KEY)
       console.log(req.user)
        const Item=await Orders.find({user:email})

     
     res.status(200).json({
        //  post:Item
         post:Item
      
     })
    }catch(e){
        res.status(403).json({
         status:"failure",
         message:e.message
        })
    }
 })

 router.patch("/cancel/:id",Auth,async (req,res)=>{
    try{
        const {id}= req.params
        const modify = await Orders.findOne({_id:id})
        modify.status="Cancelled"
        await modify.save()
        
        res.status(200).json("Order Cancelled")
    }
    catch(e){
        res.status(500).json({
            status:"Failed",
            message:e.message
        })
    }
 })

 module.exports=router;