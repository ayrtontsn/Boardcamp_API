import { db } from "../config/database.js";

async function post_game_repository ({name,image,stockTotal,pricePerDay}) {
	await db.query(`INSERT INTO games (name,image,"stockTotal","pricePerDay")
                        VALUES ($1,$2,$3,$4);`, [name,image,stockTotal,pricePerDay]);
    return {
        name,image,stockTotal,pricePerDay
    }
}

async function get_game_repository () {
	const games = await db.query(`SELECT * FROM games;`);
    return games.rows
}

async function get_game_byName_repository (name) {
	const games = await db.query(`SELECT * FROM games
                                    WHERE name=$1;`,[name]);
    return games.rows
}


const games_repository = {
    post_game_repository,
    get_game_repository,
    get_game_byName_repository
}

export default games_repository