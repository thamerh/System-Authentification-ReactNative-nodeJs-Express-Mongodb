const express = require('express');
require('dotenv').config();
require('./models/db');
const userRouter = require('./routes/user');

const User = require('./models/user');

const app = express();
app.use(express.json());
app.use(userRouter);
// testing 
// app.get('/', (req, res) => {
//   res.json({ success: true, message: 'Welcome to backend zone!' });
// });

app.listen(8000,'192.168.1.9', () => {
  console.log('port is listening');
});
