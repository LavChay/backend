require('dotenv').config();
const {MongoClient} = require('mongodb');

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

const connectToDB = async () => {
    try {
        await client.connect();
        console.log('Connected to the database');
        db = client.db('knowmycricket');
    } catch (error) {
        console.error(error);
    }
}

const getDB = () => {
    return db;
}

module.exports = {connectToDB, getDB};