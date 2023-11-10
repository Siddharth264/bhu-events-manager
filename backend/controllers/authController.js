const customErrorHandler = require('../middleware/customErrorHandler')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
//We will use bcyptjs  to generate the hashed password
// because it is unsafe to store the password directly
// in the database
const bcryptjs = require('bcryptjs')
const signup = async (req, res, next) => {
    //Destructure the data
    const {username, email, password } = req.body

    if(!username || !email || !password) return next(customErrorHandler(400, 'All fields are mandatory'))

    const userAlreadyExists = await User.findOne({email})

    if(userAlreadyExists) return next(customErrorHandler(400, 'User already registered'))

    const hashedPassword = bcryptjs.hashSync(password, 10)

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    })

    try{
        await newUser.save()
        res.status(201).json({message: "User created successfully"})
    }catch(error){
        next(error)
    }
}


const signin = async(req, res, next) => {
    const {email, password} = req.body;
    
    try{
        if(!email || !password) return next(customErrorHandler(400,'All fields are mandatory'))

        const validUser = await User.findOne({email})

        if(!validUser) return next(customErrorHandler(404, 'User not Found'))

        const validPassword = bcryptjs.compareSync(password, validUser.password)

        if(!validPassword) return next(customErrorHandler(401, 'Incorrect Password'))

        //Using JsonWebToken to login

        //creating a token for the user using _id 
        const token = jwt.sign({id: validUser._id},process.env.JWT_SECRET);

        const {password: pass, ...rest} = validUser._doc;

        res.cookie("access_token", token, {httpOnly: true}).status(200).json(rest)
    }catch(error){
        next(error);
    }
}

module.exports = {signup, signin}