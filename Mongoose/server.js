//ODM-> Object Document Mapper
const express=require("express");
const app=express()
const mongoose=require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/mongooseDB')
  .then(() => console.log('Connected!'));
app.listen(2000,()=>{
    console.log("Server started");
})