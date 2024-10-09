import { db } from "../config/database.js";

async function post_game_repository ({name,image,stockTotal,pricePerDay}) {
	const teste = await db.query(`INSERT INTO games (name,image,"stockTotal","pricePerDay")
                        VALUES ($1,$2,$3,$4);`, [name,image,stockTotal,pricePerDay]);
    return {
        name,image,stockTotal,pricePerDay
    }
}


const games_repository = {
    post_game_repository
}

export default games_repository