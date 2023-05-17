const express = require('express')
const cors = require('cors')
const app = express()
const ConnectMongo = require('./db')

app.use(express.json())
const port = 7000;
const hostname = '127.0.0.1';
app.use(cors())

ConnectMongo()

app.get('/', (req, res) => {
    res.send('This is / Page')
})

app.use('/api/user', require('./Routes/User_route'))
app.use('/api/admin', require('./Routes/Admin_route'))

app.listen(port, hostname, () => {
    console.log(`Connected to server at ${port} Port Succussfully`)
})

