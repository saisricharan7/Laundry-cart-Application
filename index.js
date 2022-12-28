const app = require('./src/app');
const mongoose= require("mongoose");
const dotenv = require('dotenv');
const cors= require("cors");


app.use(cors());

dotenv.config();
//connect to DB
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})


app.listen(4000, () => console.log('Server running......'));