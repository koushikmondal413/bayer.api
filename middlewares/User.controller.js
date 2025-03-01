export const signup = () => {

}

export const login = () => {

}
export const verifyToken = (req, res, next) => {
  // get the auto token for the headder
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

