const express=require('express');
const cors=require('cors')
const morgan=require('morgan');
const fs=require('fs')
const mongoose = require('mongoose');
require('dotenv').config();

// create express app
const app=express();

// Database
mongoose
  .connect(process.env.DATABASE,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  })
  .then(()=>console.log("DataBase Connnected"))
  .catch((err)=>console.log("DB Connection Error:",err));


// apply middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use((req,res,next)=>{
    console.log("this is my own middleware")
    next();
});

// here map method takes file one by one from routes directory
fs.readdirSync('./routes').map((r)=>{
   app.use("/api",require(`./routes/${r}`))
})


// port where backend will run
// if port is available in .env then port variable store the port but if not available then budefault its value will 8000
const port=process.env.PORT||8000;

app.listen(8000,()=>{
    console.log(`Server is running on port ${port}`)
})




