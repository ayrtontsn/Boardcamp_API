import express from "express"
import "express-async-errors"
import cors from "cors"

import dotenv from "dotenv"
import games_router from "./routers/games_router.js";
import error_handling_middleware from "./middlewares/error_handler_middleware.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use(games_router);

app.use(error_handling_middleware);

const porta = process.env.PORT || 5000
app.listen(porta,()=>{console.log(`Servidor rodando na porta: ${porta}`)})