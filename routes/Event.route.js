import { details } from '../controllers/Event.controller.js'
import { verifyToken } from '../middlewares/authenticator.js'
import express from 'express'

const eventRoute = express()

eventRoute.get('/event', verifyToken, details)

export { eventRoute }
