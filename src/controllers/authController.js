import bcrypt from 'bcrypt';
import userSchema from '../schemas/userSchema.js';
import db from '../db.js';
import { v4 as uuid } from 'uuid';


export async function signUp(req, res) {
    const user = req.body;
  
    const validate = userSchema.validate(user);

    if (validate.error) {
      console.log(validate.error);
      return res.sendStatus(422);
    }
  
    const hash = bcrypt.hashSync(user.password, 10);
    
    delete user.confirmPassword;

    await db.collection('users').insertOne({ ...user, password: hash })
  
    res.sendStatus(201);
}
  
export async function signIn(req, res) {

    const { email, password } = req.body;

    const user = await db.collection('users').findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
        
      const token = uuid();
  
      await db.collection('sessions').insertOne({ token, userId: user._id });
      
      delete user._id;
      delete user.password;
      delete user.confirmPassword;

      res.send({...user, token: token});
    } else {
      res.sendStatus(401);
    }
}