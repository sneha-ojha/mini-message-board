const asyncHandler=require("express-async-handler");

const getMessageForm=asyncHandler(async(req,res)=>{
    res.render("form");
});
module.exports=getMessageForm;
