import { Router } from "express"
import { createItem, deleteItem, getAllItems, getItem, updateItem } from "../handlers/index.js";

const appRouter = Router();

appRouter.get("/", getAllItems); // api/items => [...]
appRouter.get("/:id",getItem) // api/items/[id] (eg. id = 42)
appRouter.post("/create", createItem) // api/items/create[id] (eg. post new product id = 42)
appRouter.put("/update/:id", updateItem) // api/items/update[id] (eg. put (update) existing product)
appRouter.delete("/delete/:id", deleteItem) // api/items/delete[id] (eg. delete existing product)

export default appRouter;