import { login, signup } from '../middlewares/User.controller'

const userRoute = require('express')

userRoute.post('/signup', signup)
userRoute.post('/login', login)

export { userRoute }