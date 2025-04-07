const {Router}=require("express");
const messages=require("../model/messageModel");
const getMessageForm = require("../controller/getNewMessageForm");
const postNewMessage = require("../controller/postNewMessage");
const messageRouter=Router();

messageRouter.get("/",getMessageForm);
messgageRouter.post("/",postNewMessage);

module.exports=messageRouter;