// Load express
const express = require('express')

// Create a special router object for our routes
const router = express.Router()

// Loading our Model of meat
// moved const Meat to controllers folder under meatController.js
const Meat = require('../models/meat')

// Bring in seed data
// moved const seed to controllers folder under meatController.js
const seed = require('../models/seed')

// Bring in controller functions (destructure methods)
const { 
    findAllMeats, 
    showNewView, 
    createNewMeat,
    seedStarterData,
    showOneMeat,
    showEditView,
    updateOneMeat,
    deleteOneMeat,
    clearData
} = require('../controllers/meatController')

// Bring in controller object (with methods attached)
// const meatController = require('../controllers/meatController')
// Example: router.get('/', meatController.findAllMeats)


// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// Setup "index" route
router.get('/', findAllMeats)

// Setup "new" route
router.get('/new', showNewView)

// Setup "destroy" route
router.delete('/:id', deleteOneMeat)

// Setup "update" route
router.put('/:id', updateOneMeat)

// Setup "create" route
router.post('/', createNewMeat)

// Setup "edit" route
router.get('/:id/edit', showEditView)

// Setup "seed" route
router.get('/seed', seedStarterData)

// Setup "clearData" route to delete all docs.
router.get('/clear', clearData)

// Setup "show" route  
router.get('/:id', showOneMeat)




module.exports = router
