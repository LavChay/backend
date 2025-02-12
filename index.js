const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {connectToDB, getDB} = require('./config/db');
const signUproutes = require('./routes/signUpRoute');
dotenv.config();
const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use('/api/knowmycricket', signUproutes)

//Connect to the database
connectToDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));