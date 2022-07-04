import registerSchema from "../schemas/registerSchema.js";

export async function registerMiddleware(req, res, next) {
   
    
    const validate = registerSchema.validate({...req.body, type: req.header('Type')});

    if (validate.error) {
        return res.sendStatus(422);
    }

  next();
}