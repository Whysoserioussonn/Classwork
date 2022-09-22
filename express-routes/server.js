// Load express
const express = require('express')

// Bring in our packaged routes
const fruitRoutes = require('./routes/fruitRoutes')
const meatRoutes = require('./routes/meatRoutes')
const vegetablesRoutes = require('./routes/vegetablesRoutes')

// Creates our express app (object)
const app = express()

// Identify our port
const port = 3000

// Middleware
app.use('/api/fruits', fruitRoutes)
app.use('/api/meat', meatRoutes)
app.use('/api/vegetables', vegetablesRoutes)


// Listen to port
app.listen(port, () => {
    console.log('Listening on port: ', port)
})

