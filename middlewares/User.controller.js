import { User } from "../models/User.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const saltRounds = 10;

export const signup = async (req, res) => {
    console.info("Create user:", req.body)
    const { name, email, password, userType } = req.body

    bcrypt.hash(password, saltRounds, async (err, hashedPass) => {
        console.log(hashedPass)

        try {
            const result = await User.create({
                name,
                email,
                password: hashedPass,
                userType
            })
            
            console.log("User created:", result)
            res.send({
                message: "User created successfully."
            })
        } catch (error) {
            console.error(error)
            res.send({
                message: "Failed to create user."
            })
        }
    });

}

export const login = async (req, res) => {
    console.info("Login user:", req.body)
    const { email, password } = req.body

    try {
        const user = await User.findOne({email})

        if(!user._id) {
            return res.status(404).send({message: "User not found."})
        }

        bcrypt.compare(password, user.password, (err, result) => {
            if (result === false) {
                res.status(401).send({message: "Invalid password."})
            }

            const key = process.env.SECRET_KEY
            const token = jwt.sign({email: user.email, userType: user.userType}, key)  
            res.send({token})
        })
    } catch (error) {
        console.error("Error in login", error)
    }
}

export const get = () => {
    const users = User.find()
    return users
}

export const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
  
    if (!token) {
      // if token is not present return the responce with 403
      return res.status(403).json({ message: 'No token provided' });
    }
    
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to authenticate token' });
      }
      
      req.user = decoded;
      next();
    });
  };
