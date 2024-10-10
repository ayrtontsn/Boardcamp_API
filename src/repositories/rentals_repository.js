import { db } from "../config/database.js";
import games_repository from "./games_repository.js";

async function post_rentals_repository (customer_id,game_id,days_rented,pricePerDay) {

    console.log(pricePerDay)
    const rent_date = new Date();
    const original_price = pricePerDay*days_rented;
    console.log(original_price)
    const return_date = null
    const delay_fee = null
    

	await db.query(`INSERT INTO rentals ("customerId","gameId","rentDate","daysRented","originalPrice")
                        VALUES ($1,$2,$3,$4,$5);`,
                        [customer_id,game_id,rent_date,days_rented,original_price]);
    return
}

async function get_rentals_repository () {
	const selected = await db.query(`SELECT rentals.*,
                                        customers.id AS customers_id, customers.name AS customers_name,
                                        games.id AS game_id, games.name AS game_name
                                        FROM rentals
                                        JOIN customers ON rentals."customerId"=customers.id
                                        JOIN games ON rentals."gameId"=games.id;`);
    const rentals = selected.rows.map(rent => {
            return{
            id: rent.id,
            customerId: rent.customerId,
            gameId: rent.gameId,
            rentDate: rent.rentDate,
            daysRented: rent.daysRented,
            returnDate: rent.returnDate,
            originalPrice: rent.originalPrice,
            delayFee: rent.delayFee,
            customer:{
                id: rent.customers_id,
                name: rent.customers_name
            },
            game: {
                id: rent.game_id,
                name: rent.game_name
            }
        }
    })

    return rentals
}

async function get_rentals_byGame_repository (game_id) {
	const rentals = await db.query(`SELECT * FROM rentals
                                        WHERE "gameId"=$1
                                        AND "returnDate" IS NULL;`,[game_id]);

    return rentals
}




const rentals_repository = {
    post_rentals_repository,
    get_rentals_repository,
    get_rentals_byGame_repository
}

export default rentals_repository