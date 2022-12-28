const router = require("express").Router();
const Users= require("../models/user_M");
const bodyparser= require("body-parser");
const dotenv = require('dotenv').config();
const bcrypt=require('bcrypt');
var jwt = require('jsonwebtoken');
const Auth= require("../middleware/auth");

router.use(bodyparser.json());

router.post("/isLoggedIn", Auth, async (req, res) => {
    try {
        const user = await Users.findOne({ _id: res.user.id })
        return res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


router.post('/register',async (req,res)=>{
    try{
        const {name,email,password,phone,state,district,pincode,main_Address}=req.body;
        const usercheck = await Users.findOne({email})
        if(usercheck){
            res.json({
                message:"Account already exists"
            })
        }else{
            const hash = await bcrypt.hash(password,10)
            const newUser = await Users.create({
                name:name,
                email:email,
                password:hash,
                phone:phone,
                state:state,
                district:district,
                pincode:pincode,
                main_Address:main_Address
            })
            res.json({
                status:"success",
                newuser:newUser
            })
        }
    }
    catch(e){
        res.json({
            status:"Failed",
            message:e.message
        })
    }
})

router.post('/login',async(req,res)=>{
    try{
        const {email,password} = req.body;
        const userbyMail = await Users.find({email});
        const userbyPhone= await Users.find({phone:email})
        const user = userbyMail.length ? userbyMail[0] : userbyPhone[0]
        console.log(user._id)
        if (user){
            var result = await bcrypt.compare(password,user.password)
        }
        else{
            res.status(404).json({
                status:"Failed",
                message:"user not exist"
            })
        }
        
        if(result){
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET_KEY,{expiresIn:"2h"});
            res.status(200).json({
                status:"success",
                token,
                user
            })
        }
        else{
            res.status(400).json({
                status:"Failed",
                message:"incorrect password"
            })
        }
    }
    catch(e){
        res.status(401).json({
            status:"Failed",
            message:e.message
        })
    }
})

module.exports= router