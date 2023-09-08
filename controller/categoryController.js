const data=require("../routes/newsData");
const artical=(req,res)=>{
res.send(data);
}
const bollywood=(req,res)=>{
res.send(data);
}
module.exports={artical,bollywood};