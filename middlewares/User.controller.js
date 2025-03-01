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
            const token = jwt.sign({userId: user._id, email: user.email, 
                userType: user.userType}, key)  
            res.send({token})
        })
    } catch (error) {
        console.error("Error in login", error)
    }
}

export const details = async (req, res) => {
    const token = req.headers['authorization'].split(" ")[1];
    
    const decoded = jwt.decode(token)

    const userType = decoded.userType
    console.log('userType', userType)
    
    let users = {}

    if (userType === 'p') {
        users = await getPatientDetails(userType);
    }

    if (userType === 'hp') {
        users = await getProviderDetails(userType);
    }

    console.log('users', users)

    res.send({users})
}

const getPatientDetails = async (userType) => {
    return await User.aggregate([
        {$match: {userType}},
        {
          $lookup: {
            from: 'patients',
            localField: '_id',
            foreignField: 'userId',
            as: 'userDetails'
          }
        }
      ]);
}

const getProviderDetails = async (userType) => {
    return await User.aggregate([
        {$match: {userType}},
        {
          $lookup: {
            from: 'providers',
            localField: '_id',
            foreignField: 'userId',
            as: 'userDetails'
          }
        }
      ]);
}