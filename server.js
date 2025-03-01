import express from 'express'
import { userRoute } from './routes/User.route.js';
import { initializeDatabase } from './database/db.js';
import { configDotenv } from 'dotenv';
import cors from 'cors'

configDotenv()

initializeDatabase()

const app = express()

app.use(express.json());

app.use(cors())

app.use('/user', userRoute)

app.get('/healthcheck', (req, res) => {
    res.send("OK")
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});