const Meat = require('../models/meat')
const seed = require('../models/seed')

// index ROUTE     GET /meat    (index)
const findAllMeats = (req, res) => {  
    // Find takes two arguments:
    //   1st: an object with our query (to filter our data and find exactly what we need)
    //   2nd: callback (with an error object and the found data)
    Meat.find({}, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meat/Index', { meat: foundMeat })
        }
    })
}

// ROUTE      GET /meat/new    (new)
const showNewView = (req, res) => {     
    // res.send('<form>Create meat</form>')
    res.render('meat/New')
}

// ROUTE     POST /meat     (create)
const createNewMeat = (req, res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    // Create has two arguments:
    //   1st: the data we want to send
    //   2nd: callback function 
    Meat.create(req.body, (err, createdMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/meat')
        }
    })
}


// ROUTE       GET /meat/seed      (seed)
const seedStarterData = (req, res) => {
    // Delete all remaining documents (if there are any)
    Meat.deleteMany({}, (err, deletedMeats) => {
        if (err) {
            res.status(400).json(err)
        } else {
            console.log('deleted data.')
            console.log(seed.meat)
            // Data has been successfully deleted
            // Now use seed data to repopulate the database
            Meat.create(seed.meat, (err, createdMeat) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/meat')
                }
            })
        }
    })
}

// ROUTE     GET /meat/:id     (show)
const showOneMeat = (req, res) => {
    // findById accepts two arguments:
    //   1st: the id of the document in our database
    //   2nd: callback (with error object and found document)
    Meat.findById(req.params.id, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meat/Show', { meat: foundMeat })
        }
    })
}


// ROUTE      GET /meat/:id/edit     (edit)
const showEditView = (req, res) => {
    Meat.findById(req.params.id, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meat/Edit', { meat: foundMeat })
        }
    })
}

// ROUTE     PUT /meat/:id       (update)
const updateOneMeat = (req, res) => {

    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

    // findByIdAndUpdate takes 4 arguments:
    //    1st: the id 
    //    2nd: new data we want to use to update the old document
    //    3rd (optional): an options object, which looks like this:  { new: true }
    //    4th: callback (with error object and foundMeat or updatedMeat)
    Meat.findByIdAndUpdate(req.params.id, req.body, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/meat/${req.params.id}`)
        }
    })
}


// ROUTE       DELETE /meat/:id      (destroy)
const deleteOneMeat = (req, res) => {
    // console.log('in delete route')
    // res.send('Deleting a meat at index! (in DB)')
    
    Meat.findByIdAndDelete(req.params.id, (err, deletedMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/meat')
        }
    })
}

module.exports = {
    findAllMeats,
    showNewView, 
    createNewMeat,
    seedStarterData,
    showOneMeat,
    showEditView,
    updateOneMeat,
    deleteOneMeat
}