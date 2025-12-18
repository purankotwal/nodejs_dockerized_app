
const MongoClient = require("mongodb").MongoClient;

// get username and password from environment variables
const username = process.env.MONGO_DB_USERNAME;
const password = process.env.MONGO_DB_PWD;
const host = process.env.MONGO_DB_HOST;
const port = process.env.MONGO_DB_PORT;
const dbName = process.env.MONGO_DB_NAME;

const MONGO_URL = `mongodb://${username}:${password}@${host}:${port}`;
const client = new MongoClient(MONGO_URL);


async function GetDB() {
    await client.connect(MONGO_URL);
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    return db;
}

async function CloseDB() {
    console.log('Closing DB connection');
    await client.close();
}

module.exports = { GetDB, CloseDB };