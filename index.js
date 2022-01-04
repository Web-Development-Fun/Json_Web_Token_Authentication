const express =require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv').config();


// import Routes
const authRoute=require("./routes/auth");
const postRoute=require("./routes/post")



//connect to DB
mongoose.connect(process.env.DB_CONNECT , { useNewUrlParser : true } , ()=>
console.log("Connect to DB"));

// Middleware
app.use(express.json());


// Route Middleware
app.use("/api/user",authRoute);
app.use("/api/post",postRoute);


const Port=3000;
app.listen(Port,()=>console.log(`Server Running on Port ${Port}`));