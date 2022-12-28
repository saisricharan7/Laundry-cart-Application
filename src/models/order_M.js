const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"Users"
    },
    order_id:{type:String},
    date_time:{type:String},
    store_location:{type:String},
    city:{type:String},
    store_phone:{type:String},
    total_items:{type:Number},
    price:{type:String},
    status:{type:String},
    items:{
        shirts:{
            qty:Number,
            methods:String,
            denomination:String,
        },
        Tshirts:{
            qty:Number,
            methods:String,
            denomination:String,
        },
        Trousers:{
            qty:Number,
            methods:String,
            denomination:String,
        },
        Jeans:{
            qty:Number,
            methods:String,
            denomination:String,
        },
        Boxers:{
            qty:Number,
            methods:String,
            denomination:String,
        },
        Joggers:{
            qty:Number,
            methods:String,
            denomination:String,
        },
        Others:{
            qty:Number,
            methods:String,
            denomination:String,
        }
    }

    
    
})

const order_details = mongoose.model("orders",orderSchema);
module.exports=order_details