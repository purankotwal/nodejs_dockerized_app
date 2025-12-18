
const MongoClient = require("mongodb").MongoClient;

const MONGO_URL = "mongodb://admin:password@localhost:27017";
const client = new MongoClient(MONGO_URL);


async function GetDB() {
    await client.connect(MONGO_URL);
    console.log('Connected successfully to server');
    const db = client.db("employees");
    return db;
}

async function CloseDB() {
    console.log('Closing DB connection');
    await client.close();
}

module.exports = { GetDB, CloseDB };