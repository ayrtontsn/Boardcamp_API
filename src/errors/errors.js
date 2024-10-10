export function name_error(classify,user){
    return {
        type: "Conflict",
        message: `Um ${classify} com esse ${user} já existe!`  
    }
}

export function id_error(){
    return {
        type: "Not Found",
        message: `Não existe cliente com o id fornecido`  
    }
}
