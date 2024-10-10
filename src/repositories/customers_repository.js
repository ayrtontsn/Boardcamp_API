import { db } from "../config/database.js";

async function post_customers_repository ({name,phone,cpf}) {
	await db.query(`INSERT INTO customers (name,phone,cpf)
                        VALUES ($1,$2,$3);`, [name,phone,cpf]);
    return {
        name,phone,cpf
    }
}

async function get_customers_repository () {
	const customers = await db.query(`SELECT * FROM customers;`);
    return customers.rows
}

async function get_customers_byName_repository (name) {
	const customer = await db.query(`SELECT * FROM customers
                                    WHERE name=$1;`,[name]);
    return customer.rows
}

async function get_customers_byId_repository (id) {
	const customer = await db.query(`SELECT * FROM customers
                                    WHERE id=$1;`,[id]);
    return customer.rows
}

const customers_repository = {
    post_customers_repository,
    get_customers_repository,
    get_customers_byName_repository,
    get_customers_byId_repository
}

export default customers_repository