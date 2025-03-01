import { verifyToken } from '../middlewares/authenticator.js'
import { details, login, signup } from '../controllers/User.controller.js'
import express from 'express'

const userRoute = express()

userRoute.post('/signup', signup)
userRoute.post('/login', login)
userRoute.get('/details', verifyToken, details)

export { userRoute }