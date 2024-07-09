import { pool } from "./index.js";

export const find = async () => {
    const QUERY = `SELECT * FROM items`;
    try {
        const client = await pool.getConnection();

        const result = await client.query(QUERY);
        console.log(result);
        return result;
    }catch (error) {
        console.log("Error while returning all items", error);
        throw error;
    }
};

export const findById = async (id) => {
    const QUERY = `SELECT * FROM items WHERE id = ?`;
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [id]);
        console.log(result);
        return result;
    }catch (error) {
        console.log("Error while finding item by id", error);
        throw error;
    }
};

export const create = async (title, description, price) => {
    const QUERY = `INSERT INTO items 
        (title, description, price);
        VALUES(?,?,?)` ;
    try {
        const client = await pool.getConnection();

        const result = await client.query(QUERY, [title, description, price]);
        console.log(result);
        return result;
    }catch (error) {
        console.log("Error while creating item", error);
        throw error;
    }
};
