//const http = require('http')
import http from 'http'
import TodoService from './services/todo.service.js'

const todoService = new TodoService()

//create server 
const server = http.createServer(async (req, res) => {
    //send response
    res.writeHead(200, { 'Content-Type': 'application/json' })
    try {
        const todos = JSON.stringify(await todoService.findAll())
        res.end(todos)
    }
    catch (err) {
        res.end(JSON.stringify({ err: err }))
    }
})

//start http server 
server.listen(3000, () => {
    console.log('HTTP Server is listening')
})