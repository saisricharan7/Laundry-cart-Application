const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:{type:String, require:true},
    email:{type:String,unique:true},
    password:{type:String,unique:true},
    phone:{type:String,unique:true},
    state:{type:String,require:true},
    district:{type:String,require:true},
    pincode:{type:Number,require:true},
    main_Address:{type:String,require:true}
})

const Users = mongoose.model("users",userSchema);
module.exports = Users