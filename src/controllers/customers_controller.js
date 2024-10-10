import httpStatus from "http-status";
import { get_customers_byId_service, get_customers_service, post_customers_service } from "../services/customers_services.js";

export async function post_customers(req,res){
    const customer = req.body
    await post_customers_service(customer);

    res.sendStatus(httpStatus.CREATED)
}

export async function get_customers(req,res){
    const customers = await get_customers_service();

    res.status(httpStatus.OK).send(customers)
}

export async function get_customers_byId(req,res){
    const { id } = req.params;
    const customer = await get_customers_byId_service(id);

    res.status(httpStatus.OK).send(customer)
}