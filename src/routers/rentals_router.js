import { Router } from "express";
import { schemaValidate } from "../middlewares/schema_middleware.js";
import { get_rentals, post_rentals } from "../controllers/rentals_controller.js";
import { rentals_schema } from "../schemas/rentals_schema.js";



const rentals_router = Router();
rentals_router.post("/rentals",schemaValidate(rentals_schema),post_rentals)
rentals_router.get("/rentals",get_rentals)

export default rentals_router
