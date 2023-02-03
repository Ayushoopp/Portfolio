const dotenv = require("dotenv").config( {path: "./config.env"} );
const express = require('express');
const app = express();
port = process.env.PORT;
require("./DB/con");
//MiddleWare
// const user = require("./models/userSchema");
const middleware = (req, res,next) => {

     next();
}



app.get("/", (req,res,)=>{
    res.send(":hellow ");

});

app.get("/login", (req,res)=>{
    res.send("Login Page");
});

app.get("/register", (req,res)=>{
    res.send("THis is a registration page");
});
app.get("/about",middleware, (req,res)=>{
    res.send("THis is a about page");
});

app.get("/contact", (req,res)=>{
    res.send("Contact me Page");
});

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
