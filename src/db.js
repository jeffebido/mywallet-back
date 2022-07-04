import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

/* Conexão com banco */
const mongoClient = new MongoClient(process.env.MONGO_URI);

await mongoClient.connect();

//const db = mongoClient.db(process.env.DB_NAME);
const db = mongoClient;

export default db;
