import { User } from "../models/User.model.js";
import bcrypt from 'bcrypt'

export const signup = async (req, res) => {
    console.log(req.body)
    const { name, email, password, userType } = req.body

    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, async function(err, hashedPass) {
        console.log(hashedPass)

        try {
            const res = await User.create({
                name,
                email,
                password: hashedPass,
                userType
            })
            console.log("User created:", res)
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

export const login = () => {

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
  // Verify JWT token
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to authenticate token' });
      }
      
      req.user = decoded;
      next();
    });
  };
