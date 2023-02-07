const express = require('express');
const app = express();
var jwt = require('jsonwebtoken')
const cors= require("cors");


app.use(cors({origin:"*"}));


// Import routes
const orderRoute = require("./routes/order_R");

const userRoute= require("./routes/user_R")


//Router MIddlewares
app.use(express.json());


app.use('/',userRoute);
app.use('/api_order', orderRoute);



module.exports = app;
