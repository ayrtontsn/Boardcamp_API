export function name_error(classify,user){
    return {
        type: "CONFLICT",
        message: `Um ${classify} com esse ${user} já existe!`  
    }
}

export function id_error(type){
    return {
        type: "NOT FOUND",
        message: `Não existe ${type} com o id fornecido`  
    }
}

export function numberRent_error(){
    return {
        type: "UNPROCESSABLE ENTITY",
        message: `Não tem jogos em estoque disponível para aluguél`  
    }
}
