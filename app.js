const express=require('express');
const path = require("path");
const messageRoutes = require("./routes/messageRoutes");
const app=express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); 

app.use("/", messageRoutes);
app.use((err,req,res,next)=>{
    res.status(err.statusCode||500).send(err.message);
});
app.listen(8080,()=>{
    console.log("server running on 8080");
});

