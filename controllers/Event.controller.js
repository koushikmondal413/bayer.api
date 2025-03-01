import { User } from "../models/User.model.js";
import jwt from 'jsonwebtoken'

export const details = async (req, res) => {
    const token = req.headers['authorization'].split(" ")[1];
    const decoded = jwt.decode(token)
    const email = decoded.email
    console.log('email', email)

    try {
        const email = decoded.email

        const events = await User.aggregate([
          {$match: {email}},
          {
            $lookup: {
              from: 'events',
              localField: '_id',
              foreignField: 'userId',
              as: 'eventDetails'
            }
          }
        ]);
        
        console.log('events', events)

        res.send({events})
    } catch (error) {
        res.sendStatus(404)
    }
}
