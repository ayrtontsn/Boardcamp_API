import { id_error, numberRent_error } from "../errors/errors.js"
import customers_repository from "../repositories/customers_repository.js"
import games_repository from "../repositories/games_repository.js"
import rentals_repository from "../repositories/rentals_repository.js"


export async function post_rentals_service({customerId,gameId,daysRented}){
    const game = await games_repository.get_game_byId_repository(gameId)
    if (game.length===0) throw id_error("game")
         
    const check_customer = await customers_repository.get_customers_byId_repository(customerId)
    if(check_customer.length===0) throw id_error("cliente")
    
    const check_game = await games_repository.get_game_byId_repository(gameId)
    if(check_game.length===0) throw id_error("game")

    const rentals_game = await rentals_repository.get_rentals_byGame_repository(gameId)
    if (rentals_game.rows.length===game[0].stockTotal) throw numberRent_error()

    const result = await rentals_repository.post_rentals_repository(customerId,gameId,daysRented,game[0].pricePerDay)
    return result
}

export async function get_rentals_service(){
    const result = await rentals_repository.get_rentals_repository()
    return result
}