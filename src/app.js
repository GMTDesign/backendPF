import express from 'express'
import { apiRouter } from './routers/api.router.js'
import { productsRouter } from './routers/products.router.js'

const app = express()

app.use(express.json())

app.use('/api', apiRouter)


app.listen(8080, () => {console.log('se ha conectado!!!')})