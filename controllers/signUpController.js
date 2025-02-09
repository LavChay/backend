const bcrypt = require('bcryptjs');
const {getDB} = require('../config/db');


const registerUser = async (req, res) => {
    const { name, surname, username, email, password, phonenumber } = req.body;
    const db = await getDB();
    const profileCollection = db.collection('Profile');

    const userExists = await profileCollection.findOne({ phonenumber });
    if(userExists) {
        res.status(400).json({message: 'User already exists'});
        return;
    }
    const newUser = {
        name, 
        surname, 
        username, 
        email, 
        password, 
        phonenumber
    }

    await profileCollection.insertOne(newUser);
    res.status(201).json({message: 'User registered successfully'});
}

module.exports = {registerUser};