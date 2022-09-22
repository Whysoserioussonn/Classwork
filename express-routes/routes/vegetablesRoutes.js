// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Load our vegetables data
const vegetables = require('../models/vegetables')

// Setup "index" route
router.get('/', (req, res) => {  
    res.send(vegetables)
})


// Setup "show" route  
router.get('/:index', (req, res) => {
    res.send(vegetables[req.params.index])
})



module.exports = router
