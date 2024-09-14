import { pool } from "./index.js";

export const find = async () => {
    const QUERY = `SELECT * FROM menu_items`;
    try {
        const client = await pool.getConnection();

        const result = await client.query(QUERY);
        //console.log(result);
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

export const create = async (item_name, item_desc, price, item_pic) => {
    const QUERY = `INSERT INTO menu_items 
        (item_name, item_desc, price)
        VALUES(?,?,?)` ;
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY, [item_name, item_desc, price, item_pic]);
        //console.log(result);
        //return result;
    }catch (error) {
        console.log("Error while creating menu item", error);
        throw error;
    }
};
 