const express=require("express");
const app=express();
const port=9090;
const cors=require("cors");
const categoryRoute=require("./routes/category")
app.use("/category",categoryRoute);
app.get('/home',(req,res)=>{
res.send("live");
})
app.listen(port,()=>{
    console.log(`live on server ${port}`);
})