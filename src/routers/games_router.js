import { Router } from "express";
import { get_games, post_games } from "../controllers/games_controller.js";
import { schemaValidate } from "../middlewares/schema_middleware.js";
import { games_schema } from "../schemas/games_schema.js";



const games_router = Router();
games_router.post("/games",schemaValidate(games_schema),post_games)
games_router.get("/games",get_games)

export default games_router