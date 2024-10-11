import { name_error } from "../errors/errors.js"
import games_repository from "../repositories/games_repository.js"

export async function post_games_service(body){

    const conflict = await games_repository.get_game_byName_repository(body.name)
    if(conflict.length >0) throw name_error("game","nome")

    await games_repository.post_game_repository(body)

    return
}

export async function get_games_service(){
    const result = await games_repository.get_game_repository()
    return result
}