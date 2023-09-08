const categoryRoute=require("express").Router();
const {bollywood}=require("../controller/categoryController");
categoryRoute.get("/bollywood",bollywood);

module.exports=categoryRoute;