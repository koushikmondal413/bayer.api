import { User } from "../models/User.model";

export const signup = () => {

}

export const login = () => {

}

export const getAll = () => {
    const users = User.find()
    return users
}
export const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
  
    if (!token) {
      // if token is not present return the responce with 403
      return res.status(403).json({ message: 'No token provided' });
    }
  
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to authenticate token' });
      }
      
      req.user = decoded;
      next();
    });
  };

