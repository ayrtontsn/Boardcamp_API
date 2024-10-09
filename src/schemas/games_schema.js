import joi from "joi"

export const games_schema = joi.object({
    name: joi.string().min(3).required(),
    image: joi.string(),
    stockTotal: joi.number().min(0).required(),
    pricePerDay: joi.number().min(0).required()
})