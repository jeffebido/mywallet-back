import db from "../db.js";
import dayjs from 'dayjs';

export async function getRegisters(req, res) {

    const { user } = res.locals;

    
    try {
        const registerts = await db.collection('registers').find( {  userEmail: user.email} ).toArray();//Busca lista de registros no bd
        
        return res.send(registerts);
    } catch(error) {
        console.log(error);
    }
}

export async function newRegister(req, res) {

    const { user } = res.locals;
    
    try {
        
        /* Salva Registro de entrada ou saida no bd*/
        await db.collection('registers').insertOne({ ...req.body, type: req.header('Type'), userEmail: user.email, time: dayjs().format('DD/MM') });
        
        res.status(201).send();
 
    } catch(error) {
        console.log(error);
    }
}