import { productManager } from "../services/ProductManager.js"

export async function getController (req, res) {
    const { limit } = req.query
    if (limit){
        try {
            res.json(await productManager.getProductsWithLimit({ limit }))
        } catch (error) {
            res.status(404).json({
                message: 'error al leer el archivo'
            })
        }
    } else {
        try {
            res.json(await productManager.getProducts())
        } catch (error) {
            res.status(404).json({
                message: 'error al leer el archivo'
            })
        }
    
    }
}




export async function getByIdController (req, res) {
    const id = req.params.pid
    
    try {
        const searched = await productManager.getProductById(id)
        res.json(searched)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

export async function postController (req, res) {
    const {title, description, code, price, status, stock, category, thumbnails} = req.body
    try {
        const newProduct = await productManager.addProduct({title, description, code, price, status, stock, category, thumbnails})
        res.json(newProduct)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

export async function putController (req, res) {
    const id = req.params.pid
    const data = req.body
    try {
        const updatedProduct = await productManager.updateProduct(id, data)
        res.json(updatedProduct)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

export async function deleteController (req, res) {
    const id = req.params.pid
    try {
        const deletedProduct = await productManager.deleteProduct(id)
        res.json(deletedProduct)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}
