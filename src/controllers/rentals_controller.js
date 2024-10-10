import { get_rentals_service, post_rentals_service } from "../services/rentals_service.js";
import httpStatus from "http-status";


export async function post_rentals(req,res){
    const rentals = req.body
    await post_rentals_service(rentals);

    res.sendStatus(httpStatus.CREATED)
}

export async function get_rentals(req,res){
    const rentals = await get_rentals_service();

    res.status(httpStatus.OK).send(rentals)
}