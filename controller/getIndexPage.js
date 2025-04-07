const asyncHandler=require("express-async-handler");
const messages=require("../model/messageModel");
const newMessageEndpoint="/new";

const getIndexPage=asyncHandler((req,res)=>{
    res.render('index',{title:"mini message", messages:messages , newMessageEndpoint});
});
module.exports=getIndexPage;