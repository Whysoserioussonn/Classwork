// Load express
const express = require('express')
// load mongoose
const mongoose = require('mongoose');
const methodOverride= require('method-override')

// Bring in our packaged routes
const fruitRoutes = require('./routes/fruitRoutes')
const meatRoutes = require('./routes/meatRoutes')
const vegetablesRoutes = require('./routes/vegetablesRoutes')

// added for port
require('dotenv').config()
// Creates our express app (object)
const app = express()

// Identify our port
const port = process.env.PORT
//process.evn.MONGO_DB, need to install mongoose first, help with database connection and modals

//setup view engine
// app.set sets up config
// app.engine specifies the file extention
// second argument require('express-react-views) returns a view 
// engine that we can use

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


// use app.use(express.static("public")) for styling telling it that static files like css live inside out public folder
// Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use(methodOverride("_method")) // _method is what we will be using in the form
app.use(express.json()) // needed for parsing for POST and PUT requests
                        /*Express provides you with middleware to deal with the (incoming) data (object) in the body of the request.
                        app.use(express.json()) is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. 
                        This method is called as a middleware in your application using the code: app.use(express.json());*/   
app.use('/fruits', fruitRoutes)
app.use('/meat', meatRoutes)
app.use('/vegetables', vegetablesRoutes)


mongoose.connect(process.env.MONGO_DB);
mongoose.connection.once('open', () =>
{
    console.log('Connected to MongoDB')
})

// Listen to port
app.listen(port, () => {
    console.log('Listening on port: ', port)
})

