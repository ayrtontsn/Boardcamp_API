import joi from "joi"

export const rentals_schema = joi.object({
    customerId: joi.number().required(),
    gameId: joi.number().required(),
    daysRented: joi.number().min(0).required()
})