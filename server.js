const app = require('express');
const { userRoute } = require('./routes/User.route');
require('dotenv/config');

app.use('/user', verifyToken, userRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});