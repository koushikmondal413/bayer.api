import { User } from "../models/User.model.js";

export const signup = () => {

}

export const login = () => {

}

export const getAll = () => {
    const users = User.find()
    return users
}
