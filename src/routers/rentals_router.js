import { Router } from "express";
import { schemaValidate } from "../middlewares/schema_middleware.js";
import { delete_rentals, get_rentals, post_rentals, update_rentals } from "../controllers/rentals_controller.js";
import { rentals_schema } from "../schemas/rentals_schema.js";



const rentals_router = Router();
rentals_router.post("/rentals",schemaValidate(rentals_schema),post_rentals)
rentals_router.get("/rentals",get_rentals)
rentals_router.post("/rentals/:id/return",update_rentals)
rentals_router.delete("/rentals/:id",delete_rentals)

export default rentals_router
