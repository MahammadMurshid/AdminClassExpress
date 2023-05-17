const mongoose = require('mongoose')
const dbname = 'Project1'
const MongoURL = `mongodb://127.0.0.1:27017/${dbname}`

const ConnectMongo = async () => {
    try {
        await mongoose.connect(MongoURL)
        console.log('Connected to Mongo Succussfully')
    }
    catch (err) {
        console.log('Error is', err)
    }
}

module.exports = ConnectMongo