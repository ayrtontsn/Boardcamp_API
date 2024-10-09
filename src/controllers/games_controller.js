import httpStatus from "http-status";
import { get_games_service, post_games_service } from "../services/games_services.js";

export async function post_games(req,res){
    const game = req.body
    await post_games_service(game);

    res.sendStatus(httpStatus.CREATED)
}

export async function get_games(req,res){
    const games = await get_games_service();

    res.status(httpStatus.OK).send(games)
}