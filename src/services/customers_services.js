import { id_error, name_error } from "../errors/errors.js"
import customers_repository from "../repositories/customers_repository.js"


export async function post_customers_service(body){

    const conflict = await customers_repository.get_customers_byName_repository(body.name)
    if(conflict.length >0) throw name_error("cliente","cpf")

    const result = await customers_repository.post_customers_repository(body)
    return result
}

export async function get_customers_service(){
    const result = await customers_repository.get_customers_repository()
    return result
}

export async function get_customers_byId_service(id){
    const result = await customers_repository.get_customers_byId_repository(id)
    if (!result[0]) throw id_error("cliente")

    return result
}