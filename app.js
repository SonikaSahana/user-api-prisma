const express = require('express');
const app= express();
const dotenv = require('dotenv');
dotenv.config();
const userRouter = require('./routes/userRoutes');

app.use(express.json());
app.use('/users', userRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})