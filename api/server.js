const express = require('express')
const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.send('<h1>The server is up!</h1>')
})

server.get('/message-of-the-day', (req, res) => {
    res.send(`<h1>Today's message:</h1><p>${process.env.MOTD || '(no message)'}</p>`)
})

module.exports = server