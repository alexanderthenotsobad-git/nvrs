import { find } from "../db/queries.js";

export const getAllItems = async(req,res) => {
     try {
        const items = await find();
        return res.status(200).json({ items });
     }catch (error) {
        console.log(`Error getting items: ${error}`);
        res.status(500).json({ message: "Error" });
     }
};
export const getItem = async(req,res) => {};
export const createItem = async(req,res) => {};
export const deleteItem = async(req,res) => {};
export const updateItem = async(req,res) => {};


