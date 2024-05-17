//  to configure the dot env file
 require("dotenv").config();
 console.log(process.env.DATABASE_URL); // 
 

 const express = require("express");
 const mongoose = require("mongoose");
 const port =  5000;

//  take a data from env file
const mangostring = process.env.DATABASE_URL ;


 const app = express();
const router = require("./routes/routing")
//  enna data vanthalum json format la than varum
// this is known as middleWare
app.use(express.json())
// parent child routing /api is parent inside the routing folder others are child
app.use("/api",router);


 
// connect mangoDB with mangoose
mongoose.connect(mangostring)

const database = mongoose.connection;

database.on("connected",()=>console.log("database successfully connected"))
database.on("error",(err)=>console.log(err))


 app.listen(port,()=>{
     console.log("server is running");
 })