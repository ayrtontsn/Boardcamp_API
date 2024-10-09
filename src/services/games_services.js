import games_repository from "../repositories/games_repository.js"

export async function post_games_service(body){
    const result = await games_repository.post_game_repository(body)
    return result
}