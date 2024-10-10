import { Router } from "express";
import { schemaValidate } from "../middlewares/schema_middleware.js";
import { get_customers, get_customers_byId, post_customers } from "../controllers/customers_controller.js";
import { customers_schema } from "../schemas/customers_schema.js";

const customers_router = Router();
customers_router.post("/customers",schemaValidate(customers_schema),post_customers)
customers_router.get("/customers",get_customers)
customers_router.get("/customers/:id",get_customers_byId)

export default customers_router