const express = require('express')
const { GetUser, Insert, Delete, Update } = require('../Controller/User_controller')
const route = express.Router()

route.get('/getUser', GetUser)
route.post('/insert', Insert)
route.put('/update', Update)
route.delete('/delete', Delete)

module.exports = route
