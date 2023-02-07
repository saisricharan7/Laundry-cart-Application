const router = require("express").Router();
const Users= require("../models/user_M");
const bodyparser= require("body-parser");
const dotenv = require('dotenv').config();
const bcrypt=require('bcrypt');
var jwt = require('jsonwebtoken');
const Auth= require("../middleware/auth");

router.use(bodyparser.json());

router.post('/register',async (req,res)=>{
    try{
        const {name,email,password,phone,state,district,pincode,main_Address}=req.body;
        const usercheck = await Users.findOne({email})
        if(usercheck){
            res.json({
                message:"Account already exists"
            })
        }else{
            const hash_password = await bcrypt.hash(password,10)
            const newUser = new Users({
                name,
                email,
                hash_password,
                phone,
                state,
                district,
                pincode,
                main_Address
            })
            await newUser.save();
            res.status(200).json({
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
        let user;
        if (userbyMail.length || userbyPhone.length){
             user = userbyMail.length ? userbyMail[0]: userbyPhone[0]
            var result = await bcrypt.compare(password,user.password)
        }
        else{
            res.status(404).json({
                status:"Failed",
                message:"user not exist"
            })
        }
        
        if(result){
            const token = jwt.sign({id:user._id},"secure_jwt_secret_key",{expiresIn:"2h"});
            res.status(200).json({
                status:"success",
                token,
                user
            })
            console.log(token);
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