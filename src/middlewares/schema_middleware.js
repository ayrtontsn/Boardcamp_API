export function schemaValidate(schema) {
    return (req,res,next) => {
        const validacao = schema.validate(req.body,{abortEarly:false});
        if (validacao.error) throw {
            type: "BAD REQUEST",
            message: validacao.error.details.map(detail => detail.message)
        }
        next();
    }
}