const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./configs/database')
// Setting Up Config files
dotenv.config({path:'./config.env'})

//Connecting to Database
connectDatabase();

const port =process.env.PORT ||4000;
app.listen(4000,()=>{
    console.log(`Server started on Port : ${port} in ${process.env.NODE_ENV} mode`);
})