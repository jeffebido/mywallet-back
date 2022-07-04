import db from "../db.js";

export async function getRegisters(req, res) {

    const { user } = res.locals;

    
    try {
        const registerts = await db.collection('registers').find( {  userEmail: user.email} ).toArray();//Busca lista de participantes no bd

        res.send(registerts);
    } catch(error) {
           console.log(error);
    }
}

export async function newRegister(req, res) {

    try {
        const registerts = await db.collection('users').find().toArray();//Busca lista de participantes no bd

        res.send(registerts);
    } catch(error) {
           console.log(error);
    }
}