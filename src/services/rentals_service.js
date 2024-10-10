import { id_error, numberRent_error } from "../errors/errors.js"
import customers_repository from "../repositories/customers_repository.js"
import games_repository from "../repositories/games_repository.js"
import rentals_repository from "../repositories/rentals_repository.js"


export async function post_rentals_service({customerId,gameId,daysRented}){
    const game = await games_repository.get_game_byId_repository(gameId)
    const price = game[0].pricePerDay
    const stock = game[0].stockTotal

    if (game.length=0) throw id_error("game")
         
    const customer = await customers_repository.get_customers_byId_repository(customerId)
    if(customer.length=0) throw id_error("cliente")

    const rentals_game = await rentals_repository.get_rentals_byGame_repository(gameId)
    console.log(rentals_game.rows.length)
    if (rentals_game.rows.length===stock) throw numberRent_error()

    const result = await rentals_repository.post_rentals_repository(customerId,gameId,daysRented,price)
    return result
}

export async function get_rentals_service(){
    const result = await rentals_repository.get_rentals_repository()
    return result
}