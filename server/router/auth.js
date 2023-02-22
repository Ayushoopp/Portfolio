const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
router.use(express.json());
require("../DB/con");
const User  = require("../models/userSchema")

router.get("/", (req,res)=>{
    res.send("Hello Home Auth.js")
});

// using promises

// router.post("/register", (req, res)=>{

//     const { name,email,phone,work,password,cpassword } = req.body;

//     if(!name ||  !email || !phone || !work || !password || !cpassword){
//         return res.status(201).json({message: "Please Fill The Empty feild"});
//     }
//     user.findOne({email:email})
//         .then((userExist)=>{
//             if(userExist){
//                 return res.status(422).json({message: "Email Already Exist"});
//             }

//             const newUser = new user({name,email,phone,work,password,cpassword});

//             newUser.save().then(()=>{
//                 res.status(201).json({message: "Data registered"});
//             }).catch((err)=>{
//                 console.log(err)
//                 res.status(500).json({message: "Failed To Register"})
//             });
//         }).catch(err => {console.log(err);})  
// });


//async await && try() catch(){} 

router.post("/register", async (req, res)=>{

    const { name,email,phone,work,password,cpassword } = req.body;

    if(!name ||  !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error: "Please Fill The Empty feild"});
    }
    try {
     const userExist = await  User.findOne({email:email})
     if(userExist){
        return res.status(422).json({message: "Email Already Exist"});
    } else if(password !== cpassword){
        return res.status(422).json({message: "Password is incorrect"});
    } else {
        const newUser = new User({name,email,phone,work,password,cpassword});
        const userRegister =  await newUser.save();
        res.status(201).json({message: "Data registered"});
    }

   
    }
    catch(err){
        console.log(err);
    }
     
});

//login route

router.post("/signin", async (req,res) => {

    
    try{
        let token;
        const { email, password } = req.body;

        if(!email || !password){
            return res.status(400).json({message: "Please Fill the credentials"})
        }

        const userLogin = await User.findOne({email:email});
        
        if(userLogin){
            const isMatch =  bcrypt.compare(password, userLogin.password);

            //   token = await userLogin.generateAuthToken();
            //  console.log(token);
            res.cookie("jwtoken", token, {
                expires:new Date(Date.now() + 25892000000),
                httpOnly: true
            });


            if(!isMatch){
                res.status(400).json({error: "Invalid Credentials"});
            } else {
                res.json({message: "User Signin Successfully"});
        } 
    } else {
        res.status(400).json({error: "Invalid Credentials"});
    }
}
    catch(err){
        console.log(err);
    }
    
}
)








module.exports = router;

// .get("/", (req,res)=>{
//     res.send("Hello Home Auth.js")
    
// })