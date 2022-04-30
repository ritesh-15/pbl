const User = require('../models/User');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const JWT_SECRET = "643d1d8f86f88da4f8ee58608053df1033bbdfab811bfae87a892c8b28afab3085797f0ccb86012eb499c699d2f42f74bd59dfae31d28583339507b790facb70"

async function login(req,res,next){
    const {email,password} = req.body;
    const user = {
        email,
        password
    }
    if(!user.email || !user.password){
        return res.status(400).json({
            error: "Please provide email and password"
        })
    }
    
    try{
        const newUser = await User.findOne({email:user.email});
        if(!newUser){
            return res.status(400).json({
                error: "User does not exist"
            })
        }
        const isMatch = await bcrypt.compare(user.password,newUser.password);
        if(!isMatch){
            return res.status(400).json({
                error: "Invalid credentials"
            })
        }
        const token = jwt.sign({id:newUser._id},JWT_SECRET)
        

        return res.json({
            user:newUser,
            token
        })

    }
    catch(err){
        console.log(err)
        res.status(500).json({
            error: "Server error"
        })
    }



}


async function register(req,res,next){
    const {name,email,password,phone} = req.body;
    const user = {
        name,
        email,
        password,
        phone
    }
    if(!user.name || !user.email || !user.password || !user.phone){
        return res.status(400).json({
            error: "Please provide name,email,password and phone"
        })
    }
    try{
        const isUser = await User.findOne({email:user.email});
        if(isUser){
            return res.status(400).json({
                error: "User already exists"
            })
        }
        const hashedPassword = await bcrypt.hash(user.password,10);
        user.password = hashedPassword;
        const newUser = await User.create(user);
        const token = jwt.sign({id:newUser._id},JWT_SECRET)
        return res.json({
            user:newUser,
            token
        })
    }
    catch(err){
        console.log(err)
        res.status(500).json({
            error: "Server error"
        })
    }
}

module.exports = {login, register}