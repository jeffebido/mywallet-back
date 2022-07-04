import joi from 'joi';

const userSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.string().required().valid(joi.ref('password'))
});

export default userSchema;