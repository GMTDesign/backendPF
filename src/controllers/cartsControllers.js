import { cartManager } from "../services/CartManager.js"

export async function getByIdController(req, res) {
    const id = req.params.cid
    try {
        const searched = await cartManager.getCartById(id)
        res.json(searched)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

export async function postController(req, res) {
    try {
        const newCart = await cartManager.createCart()
        res.json(newCart)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

export async function postProductController(req, res) {
    const cid = req.params.cid
    const pid = req.params.pid
    try {
        const addProduct = await cartManager.addProduct(cid, pid)
        res.json(addProduct)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}