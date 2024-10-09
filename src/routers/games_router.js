import { Router } from "express";
import { post_games } from "../controllers/games_controller.js";
import { schemaValidate } from "../middlewares/schema_middleware.js";
import { games_schema } from "../schemas/games_schema.js";



const games_router = Router();
games_router.post("/post",schemaValidate(games_schema),post_games)

export default games_router