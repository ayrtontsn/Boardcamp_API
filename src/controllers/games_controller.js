import httpStatus from "http-status";
import { post_games_service } from "../services/games_services.js";

export async function post_games(req,res){
    const game = req.body
    await post_games_service(game);

    res.sendStatus(httpStatus.CREATED)
}