import express from 'express'
import { ProductService } from '../services/products.service.js'

const productRouter = express.Router()
const productService = new ProductService();
//endpoints
productRouter.get('/list', async (req, res) => {
    try {
        res.status(200).json(await productService.list())
    }
    catch (err) {
        res.status(500).json({ err: err })
    }
})


export { productRouter }