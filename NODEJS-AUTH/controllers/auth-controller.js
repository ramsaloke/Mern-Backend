
import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// register controller

const registerUser = async (req,res)=>{
try {
    // extract user information from our req body
    const {username , email, password,role} = req.body;

    //check if the user is already existing in our database...
    const checkExistingUser = await User.findOne({$or: [{username}, {email}]});
    if(checkExistingUser) {
        return res.status(400).json({
            success: false,
            message: 'User is already exists either with user name or same email please try with a different username or email'
        })
    }
//hash user password
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password,salt)

// create a new user and save in your database

const newlyCreatedUser = new User({
    username,
    email,
    password : hashedPassword,
    role: role || 'user',
})
await newlyCreatedUser.save();

if(newlyCreatedUser) {
res.status(201).json({
    success: true,
    message : 'new user created successfully',
})
} else {
    res.status(400).jso({
        success: false,
        message: "Unable to register user please try again"
    })
}


} catch (error) {
    console.log(error);
    res.status(500).json({
        success: false,
        message: "some error occurs please try again",
    })
}
}


//login controller

const loginterUser = async (req,res)=>{
    try {
        const {username,password} = req.body;

        //find if the current user is exists in database or not
        const user = await User.findOne({username});
        if(!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            })
        } 

        //check if the password is matched ot not 
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if(!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: 'Invalid credentials'
            })
        }

        // if password is correct then create token using jwt

        //create user token
        const accessToken = jwt.sign({
            userId : user._id,
            username : user.username,
            role: user.role,
        },process.env.JWT_SECRET_KEY,{
            expiresIn: '15m'
        })

        res.status(200).json({
            success: true,
            message : "Logged in successfully",
            accessToken
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "some error occurs please try again",
    })
}}

export default {registerUser,loginterUser}
    