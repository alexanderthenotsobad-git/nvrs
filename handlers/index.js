import { create, find } from "../db/queries.js";

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

export const createItem = async(req,res) => {
   const { item_name, item_desc, price, item_pic } = req.body;

   if (!item_name || !item_desc || !price) {
      return res
      .status(403)
      .json({message: "Cannot create. Please enter item name desc and price."});
      }  
      try {
         const item = await create(item_name, item_desc, price);
         return res.status(201).json({ item })
      } catch (error) {
         console.log(`Error inserting item: ${error}`);
         res.status(500).json({ message: "Error"});
         
   }
};
export const deleteItem = async(req,res) => {};
export const updateItem = async(req,res) => {};


