import { Router } from "express"
import { getByIdController, postController, postProductController } from "../controllers/cartsControllers.js"

export const cartsRouter = Router()



cartsRouter.get('/carts/:cid', getByIdController)
cartsRouter.post('/carts', postController)
cartsRouter.post('/carts/:cid/product/:pid', postProductController)

