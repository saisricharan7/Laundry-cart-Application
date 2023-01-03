const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    user:{
        type:String
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
            item_price:Number
        },
        Tshirts:{
            qty:Number,
            methods:String,
            denomination:String,
            item_price:Number
        },
        Trousers:{
            qty:Number,
            methods:String,
            denomination:String,
            item_price:Number
        },
        Jeans:{
            qty:Number,
            methods:String,
            denomination:String,
            item_price:Number
        },
        Boxers:{
            qty:Number,
            methods:String,
            denomination:String,
            item_price:Number
        },
        Joggers:{
            qty:Number,
            methods:String,
            denomination:String,
            item_price:Number
        },
        Others:{
            qty:Number,
            methods:String,
            denomination:String,
            item_price:Number
        }
    }

    
    
})

const order_details = mongoose.model("orders",orderSchema);
module.exports=order_details