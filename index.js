import express from 'express'
import { createServer } from 'http'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { Server } from 'socket.io'

const app = express()
const http = createServer(app)
const io = new Server(http)

const PORT = 8000

const __dirname = dirname(fileURLToPath(import.meta.url))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket)=>{
    console.log('a user connected')
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

http.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})

// console.log(dirname(fileURLToPath(import.meta.url)))