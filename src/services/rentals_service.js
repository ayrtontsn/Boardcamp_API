import { id_error, numberRent_error, rentDelivered_error } from "../errors/errors.js"
import customers_repository from "../repositories/customers_repository.js"
import games_repository from "../repositories/games_repository.js"
import rentals_repository from "../repositories/rentals_repository.js"


export async function post_rentals_service({customerId,gameId,daysRented}){
    const check_game = await games_repository.get_game_byId_repository(gameId)
    if (check_game.length===0) throw id_error("game")
         
    const check_customer = await customers_repository.get_customers_byId_repository(customerId)
    if(check_customer.length===0) throw id_error("cliente")

    const rentals_game = await rentals_repository.get_rentals_byGame_repository(gameId)
    if (rentals_game.rows.length===check_game[0].stockTotal) throw numberRent_error()

    const result = await rentals_repository.post_rentals_repository(customerId,gameId,daysRented,check_game[0].pricePerDay)
    return result
}

export async function get_rentals_service(){
    const result = await rentals_repository.get_rentals_repository()
    return result
}

export async function update_rentals_service(id){
    const rentals_game = await rentals_repository.get_rentals_byId_repository(id)
    console.log(rentals_game.rows[0])
    if(rentals_game.rows.length===0) throw id_error("aluguel")
    if(rentals_game.rows[0].returnDate) throw rentDelivered_error()
    await rentals_repository.update_rentals_repository(id,
                                                        rentals_game.rows[0].originalPrice,
                                                        rentals_game.rows[0].rentDate,
                                                        rentals_game.rows[0].daysRented)
    return
}