import { db } from "../config/database.js";

async function post_rentals_repository (customer_id,game_id,days_rented,pricePerDay) {
    const rent_date = new Date();
    const original_price = pricePerDay*days_rented;
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
                                        JOIN games ON rentals."gameId"=games.id
                                        ORDER BY rentals.id;`);
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

async function get_rentals_byId_repository (id) {
	const rentals = await db.query(`SELECT * FROM rentals
                                        WHERE "id"=$1;`,[id]);

    return rentals
}

async function update_rentals_repository (id,originalPrice,rent_date,daysRented) {
    const return_date = new Date()
    const pricePerDay = originalPrice/daysRented
    const difference = Math.ceil((return_date.getTime() - rent_date.getTime())/(1000*60*60*24))-1
    let delay_fee
    if(difference>daysRented){
        delay_fee = (difference-daysRented)*pricePerDay
    } else {
        delay_fee = 0
    }
    console.log(delay_fee)

	await db.query(`UPDATE rentals SET "returnDate"=$1 , "delayFee"=$2
                        WHERE id=$3;`,
                        [return_date,delay_fee,id]);
    return
}

const rentals_repository = {
    post_rentals_repository,
    get_rentals_repository,
    get_rentals_byGame_repository,
    get_rentals_byId_repository,
    update_rentals_repository
}

export default rentals_repository