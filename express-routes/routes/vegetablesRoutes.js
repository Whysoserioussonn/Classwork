// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Loading our Model of vegetable
// moved const Vegetable to controllers folder under vegetableController.js
const Vegetable = require('../models/vegetable')

// Bring in seed data
// moved const seed to controllers folder under vegetableController.js
const seed = require('../models/seed')

// Bring in controller functions (destructure methods)
const { 
    findAllVegetables, 
    showNewView, 
    createNewVegetable,
    seedStarterData,
    showOneVegetable,
    showEditView,
    updateOneVegetable,
    deleteOneVegetable,
    clearData
} = require('../controllers/vegetableController')

// Bring in controller object (with methods attached)
// const vegetableController = require('../controllers/vegetableController')
// Example: router.get('/', vegetableController.findAllVegetables)


// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Setup "index" route
router.get('/', findAllVegetables)

// Setup "new" route
router.get('/new', showNewView)

// Setup "destroy" route
router.delete('/:id', deleteOneVegetable)

// Setup "update" route
router.put('/:id', updateOneVegetable)

// Setup "create" route
router.post('/', createNewVegetable)

// Setup "edit" route
router.get('/:id/edit', showEditView)

// Setup "seed" route
router.get('/seed', seedStarterData)

// Setup "clearData" route to delete all docs.
router.get('/clear', clearData)

// Setup "show" route  
router.get('/:id', showOneVegetable)




module.exports = router
