const app = require('./src/app');
const mongoose= require("mongoose");
const dotenv = require('dotenv');


dotenv.config();
//connect to DB
mongoose.connect("mongodb+srv://sai_charan:saicharan@cluster0.pu747xs.mongodb.net/laundryDB",{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})


app.listen(4000, () => console.log('Server running......'));