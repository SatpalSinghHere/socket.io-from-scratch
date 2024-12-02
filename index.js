import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express()

const PORT = 8000

const __dirname = dirname(fileURLToPath(import.meta.url))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})

console.log(dirname(fileURLToPath(import.meta.url)))