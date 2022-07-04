import joi from 'joi';

const registerSchema = joi.object({
    value: joi.number().required(),
    description: joi.string().required(),
    type: joi.string().required().valid('expense', 'income')
});

export default registerSchema;