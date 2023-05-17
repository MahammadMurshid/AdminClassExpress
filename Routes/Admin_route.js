const express = require('express')
const { GetAdmin, Register,Login, UpdateAdmin, DeleteAdmin } = require('../Controller/admin_controller')
const route = express.Router()

route.get('/getadmin', GetAdmin)
route.post('/register', Register)
route.post('/login', Login)
route.put('/update', UpdateAdmin)
route.delete('/delete', DeleteAdmin)

module.exports = route
