// express
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// mongoose connection
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Social-Network-Api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () =>
console.log('MongoDb connection successful!')
);

mongoose.connection.on('error', (err) =>
console.log(`Mongoose ERROR: ${err}`)
);

mongoose.set('debug', true)


// to the routes file
app.use(require('./routes'));


// port
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
console.log((`Success! Connected on localhost:${PORT}`))
})