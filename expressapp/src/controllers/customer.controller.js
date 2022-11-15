import express from 'express'
import { CustomerService } from '../services/customer.service.js'

const customerRouter = express.Router()
const customerService = new CustomerService();
//endpoints
customerRouter.get('/list', async (req, res) => {
    try {
        res.status(200).json(await customerService.list())
    }
    catch (err) {
        res.status(500).json({ err: err })
    }
})


export { customerRouter }