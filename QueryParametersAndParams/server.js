const express= require("express")
const app=express()
app.listen(5000,()=>{
    console.log("Server has been started");
})
let usersData=[
    {
        id:1,
        name:"V",
        address:"Z",
    },
    {
        id:2,
        name:"R",
        address:"B",
    },
    {
        id:3,
        name:"P",
        address:"M",
    }
]
app.get("/allusers",(req,res)=>{
    res.send(usersData)
})
app.get("/getuserbyid",(req,res)=>{
    let {id}=req.query
    let flag=false
    let i;
    for (i=0;i<usersData.length;i++){
        if (usersData[i].id==id){
            return res.send(usersData[i])
        }
    }
    return res.send("User Not Found")
})
//params for getuserbyid
/*app.get("getuserbyid:/id",(req,res)=>{
    let {id}=req.params

    })*/
app.get("/deleteuserbyid",(req,res)=>{
    let {id}=req.query
    for (let i=0;i<usersData.length;i++){
        if (usersData[i].id==id){
            usersData.splice(i,1)
            return res.send("user Deleted")
            break
        }
        res.send("user not found")
    }
})
app.get("/adduser",(req,res)=>{
    let {id,name,address}=req.query;
    let newUser={
        id:id,
        name:name,
        address:address
    }
    usersData.push(newUser)
    res.send("New User added")
})
//use & to send multiple query Parameters
//https://localhost:4000/profile?username=V&rollno=2310991160
//params
//client: http://localhost:4000/getuserbyid/5
//server: /getuserbyid:/id