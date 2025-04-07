const {Router}= require("express");
const getIndexPage=require("../controller/getIndexPage");
const getNewMessageForm=require("../controller/getNewMessageForm");
const postNewMessage=require("../controller/postNewMessage");

const messageRoutes=Router();

messageRoutes.get("/", getIndexPage);
messageRoutes.route("/new").get(getNewMessageForm).post(postNewMessage);

module.exports=messageRoutes;