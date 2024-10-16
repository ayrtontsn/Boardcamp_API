import httpStatus from "http-status";
import { delete_rentals_service,
        get_rentals_service,
        post_rentals_service,
        update_rentals_service } from "../services/rentals_service.js";


export async function post_rentals(req,res){
    const rentals = req.body
    await post_rentals_service(rentals);

    res.sendStatus(httpStatus.CREATED)
}

export async function get_rentals(req,res){
    const rentals = await get_rentals_service();

    res.status(httpStatus.OK).send(rentals)
}

export async function update_rentals(req,res){
    const { id } = req.params;
    await update_rentals_service(id);

    res.sendStatus(httpStatus.OK)
}

export async function delete_rentals(req,res){
    const { id } = req.params;
    await delete_rentals_service(id);

    res.sendStatus(httpStatus.OK)
}
