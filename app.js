const express = require('express');
const app= express();
const dotenv = require('dotenv');
dotenv.config();
const oauthRoutes = require("./routes/oauth");
const userRouter = require('./routes/userRoutes');

app.use(express.json());
app.use("/oauth", oauthRoutes);
app.use('/users', userRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})