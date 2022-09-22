// Load express
const express = require('express')

// Bring in our packaged routes
const fruitRoutes = require('./routes/fruitRoutes')

// Creates our express app (object)
const app = express()

// Identify our port
const port = 3000

// Middleware
app.use('/api/fruits', fruitRoutes)

// Listen to port
app.listen(port, () => {
    console.log('Listening on port: ', port)
})

