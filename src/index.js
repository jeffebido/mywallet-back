import express from 'express';
import cors from 'cors';
import authRouter from './routes/authRouter.js';

import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();


const app = express();

app.use(express.json());
app.use(cors());

/* Conexão com banco */
const mongoClient = new MongoClient(process.env.MONGO_URI);

let db;
mongoClient.connect(() => {
    db = mongoClient.db("mywallet");
});



app.use(authRouter);



app.listen(5000, () => {
    console.log('Server is listening on port 5000.');
});