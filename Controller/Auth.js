const User = require("../Model/User")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")



const signup = async (req, res) => {
    const { firstName, lastName, username, email, password } = req.body

    try {
        if (!firstName) {
            throw new Error("First name is required")
        }
        if (!lastName) {
            throw new Error("First name is required")
        }
        if (!username) {
            throw new Error("First name is required")
        }
        if (!email) {
            throw new Error("First name is required")
        }
        if (!password) {
            throw new Error("First name is required")
        }
    
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            throw new Error("User with this email Already exist")
        }
    
        const salt = bcrypt.genSaltSync(12);
        const hash = bcrypt.hashSync(password, salt);
    
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            username,
            password:hash
        })
        console.log((newUser))
        return res.status(201).json({message:"User Created successfully"})
    } catch (error) {
        // console.log("an Error occured")
        return res.status(500).json({message:"an error occured during the proccess"})
    }
}

const login = async (req, res)=>{
    const {email, password} = req.body

    try {
        const user = await User.findOne({email})
        if(!user){
            throw new Error("No user with this Email address")
        }
        const isvalidPassword = bcrypt.compare(password, user.password)
        if(!isvalidPassword){
            return res.status(401).json({error:"Incorrect password"})
        }

        const token = jwt.sign({id:user._id}, process.env.TOKEN_SECRET, {
            expiresIn: "1h"
        } )
        res.json({message:'User succesfully logged in', token})
        
        // var token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' });

    } catch (error) {
        console.log(error)
        return res.status(500).json({error:"an Error occured during the process"})
    }

}

module.exports ={ signup, login};