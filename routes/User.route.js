import { get, login, signup } from '../middlewares/User.controller.js'
import express from 'express'

const userRoute = express()

userRoute.post('/signup', signup)
userRoute.post('/login', login)
userRoute.post('/user:id', get)

export { userRoute }