import express from 'express';
import cors from 'cors';
import authRouter from './routes/authRouter.js';
import registersRouter from './routes/registersRouter.js';





const app = express();

app.use(express.json());
app.use(cors()); 




app.use(authRouter);
 
app.use(registersRouter);



app.listen(process.env.PORT, () => {
    console.log('Server is listening on port 5000.');
});