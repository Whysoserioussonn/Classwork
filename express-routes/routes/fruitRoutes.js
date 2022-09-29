// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Loading our Model of fruit
const Fruit = require('../models/fruit')

// Bring in seed data
const seed = require('../models/seed')

// Bring in controller functions (destructure methods)
const { 
    findAllFruits, 
    showNewView, 
    createNewFruit,
    seedStarterData,
    showOneFruit,
    showEditView,
    updateOneFruit,
    deleteOneFruit
} = require('../controllers/fruitController')

// Bring in controller object (with methods attached)
// const fruitController = require('../controllers/fruitController')
// Example: router.get('/', fruitController.findAllFruits)


// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Setup "index" route
router.get('/', findAllFruits)

// Setup "new" route
router.get('/new', showNewView)

// Setup "destroy" route
router.delete('/:id', deleteOneFruit)

// Setup "update" route
router.put('/:id', updateOneFruit)

// Setup "create" route
router.post('/', createNewFruit)

// Setup "edit" route
router.get('/:id/edit', showEditView)

// Setup "seed" route
router.get('/seed', seedStarterData)

// Setup "show" route  
router.get('/:id', showOneFruit)




module.exports = router
