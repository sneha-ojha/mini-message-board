const asyncHandler=require("express-async-handler");
const messages=require("../model/messageModel");
const ClientSideError = require("../errors/ClientSideError");

const postNewMessage=asyncHandler((req,res)=>{
    const { user, text } = req.body;

    if(!text){
        throw new ClientSideError('text (message) not specified');
    }
    if(!user){
        throw new ClientSideError('author not specified');
    }
    messages.push({text: text, user:user, added:new Date()});
    res.redirect("/");
});
module.exports=postNewMessage;

