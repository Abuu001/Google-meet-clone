require('dotenv').config();
const express = require('express')
const app = express()
const http = require('http')
const cors= require('cors')
const PORT =  process.env.PORT || 8000;
const server = http.createServer(app)
const routes = require('./Routes/routes')

const io =require('socket.io')(server)
const socketManager= require('./controllers/socketManager')

app.use([
    cors(),
    express.json(),
    routes
])

io.on('connection',socketManager);
 
server.listen(PORT,console.log(`Server running in port ${PORT}`))