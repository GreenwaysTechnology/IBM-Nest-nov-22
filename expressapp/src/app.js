import express from "express";
import { customerRouter } from "./controllers/customer.controller.js";
import { productRouter } from './controllers/product.controller.js'

//create application object 
const app = express()

//configure the controller, so that applicaiton object will route the request 
app.use('/api/customers', customerRouter)
app.use('/api/products', productRouter)


//global endpoints
app.get('/', (req, res) => {
    res.end('Home Page')
})

app.listen(3000, () => {
    console.log('Express Server is Up')
})