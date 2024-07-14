import { Router } from "express"
import { createItem, deleteItem, getAllItems, getItem, updateItem } from "../handlers/index.js";

const appRouter = Router();

appRouter.get("/", getAllItems); // api/products => [...]
appRouter.get("/:id",getItem) // api/products/[id] (eg. id = 42)
appRouter.post("/create", createItem) // api/products/create[id] (eg. post new product id = 42)
appRouter.put("/update/:id", updateItem) // api/products/update[id] (eg. put (update) existing product)
appRouter.delete("/delete/:id", deleteItem) // api/products/delete[id] (eg. delete existing product)

export default appRouter;