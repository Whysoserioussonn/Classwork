// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Load our fruits data
const fruits = require('../models/fruits')

// Setup "index" route
router.get('/', (req, res) => {  
    res.send(fruits)
})

// Setup "new" route
router.get('/new', (req, res) => {     
    res.send('<form>Create fruit</form>')
})

// Setup "create" route
router.post('/', (req, res) => {
    res.send('Creating a new fruit! (in DB)')
})

// Setup "show" route  
router.get('/:index', (req, res) => {
    res.send(fruits[req.params.index])
})

// Setup "edit" route
router.get('/:index/edit', (req, res) => {
    res.send('<form>Edit fruit</form>')
})

// Setup "update" route
router.put('/:index', (req, res) => {
    res.send('Updating a fruit at index! (in DB)')
})

// Setup "destroy" route
router.delete('/:index', (req, res) => {
    res.send('Deleting a fruit at index! (in DB)')
})

module.exports = router
