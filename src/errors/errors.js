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

export function rentDelivered_error(){
    return {
        type: "UNPROCESSABLE ENTITY",
        message: `Aluguel já finalizado e jogo entregue`  
    }
}

export function rentNotDelivered_error(){
    return {
        type: "BAD REQUEST",
        message: `Aluguel ainda não finalizado e jogo ainda não foi entregue`  
    }
}