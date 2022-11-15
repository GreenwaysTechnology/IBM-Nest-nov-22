//const http = require('http')
import http from 'http'

//create server 
const server = http.createServer((req, res) => {
    //send response
    res.end('Hello,Node,Web')
})

//start http server 
server.listen(3000, () => {
    console.log('HTTP Server is listening')
})