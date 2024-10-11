import { db } from "../config/database.js";

async function post_customers_repository ({name,phone,cpf}) {
	await db.query(`INSERT INTO customers (name,phone,cpf)
                        VALUES ($1,$2,$3);`, [name,phone,cpf]);
    return
}

async function get_customers_repository () {
	const customers = await db.query(`SELECT * FROM customers;`);
    return customers.rows
}

async function get_customers_byCpf_repository (cpf) {
	const customer = await db.query(`SELECT * FROM customers
                                    WHERE cpf=$1;`,[cpf]);
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
    get_customers_byCpf_repository,
    get_customers_byId_repository
}

export default customers_repository