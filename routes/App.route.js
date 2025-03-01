const app = require('express');
const { userRoute } = require('./User.route');
require('dotenv/config');

app.use('/user', userRoute)
