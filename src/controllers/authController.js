import bcrypt from 'bcrypt';
import userSchema from '../schemas/userSchema.js';

export async function signUp(req, res) {
    const user = req.body;
  
    const validate = userSchema.validate(user);

    if (validate.error) {
      return res.sendStatus(422);
    }
  
    const hash = bcrypt.hashSync(user.password, 10);
  
    await db.collection('users').insertOne({ ...user, password: hash })
  
    res.sendStatus(201);
}
  
export async function signIn(req, res) {

}