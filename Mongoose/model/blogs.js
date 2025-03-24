const mongoose=require("mongoose")
let blogSchema=new mongoose.Schema({
    title:String,
    content:String,
    author:String,
    date:{
        type:Date,
        default:Date.now,
    }
})
module.exports=mongoose.model("blogModel",blogSchema)