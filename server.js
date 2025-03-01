import express from 'express'
import { userRoute } from './routes/User.route.js';
import { verifyToken } from './middlewares/User.controller.js';

const app = express()

app.use('/user', verifyToken, userRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});