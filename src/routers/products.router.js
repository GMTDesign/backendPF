import { Router } from "express"
import { deleteController, getByIdController, getController, postController, putController } from "../controllers/productsControllers.js"

export const productsRouter = Router()

productsRouter.get('/products', getController)

productsRouter.get('/products/:pid', getByIdController)

productsRouter.post('/products', postController)

productsRouter.put('/products/:pid', putController)

productsRouter.delete('/products/:pid', deleteController)