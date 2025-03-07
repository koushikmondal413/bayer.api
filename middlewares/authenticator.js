import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'].split(" ")[1];
    console.log('token', token)
  
    if (!token) {
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

export const validateUserType = (req, res) => {
  const token = req.headers['authorization'].split(" ")[1];

  const decoded = jwt.decode(token)

  console.log('doce')
}