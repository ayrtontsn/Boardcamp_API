import joi from "joi"

export const customers_schema = joi.object({
    name: joi.string().min(3).required(),
    phone: joi.string().pattern(new RegExp('^[0-9]{10,11}$')).required(),
    cpf: joi.string().pattern(new RegExp('^[0-9]{11}$')).required()
})