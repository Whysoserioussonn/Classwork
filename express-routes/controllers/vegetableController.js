const Vegetable = require('../models/vegetable')
const seed = require('../models/seed')

// "index" ROUTE    GET /vegetables  Action(index)- Displaying a list of all things
// Mongoose Function .find
const findAllVegetables = (req, res) => {  
    // res.send(vegetables);
    // res.render('vegetables/Index', {vegetables: vegetables})

    // Find takes two arguments:
    //   1st: an object with our query (to filter our data and find exactly what we need)
    //   2nd: callback (with an error object and the found data)
    Vegetable.find({}, (err, foundVegetable) => {
        if (err)
         {
            res.status(400).json(err)
         }
         else
         {
            res.status(200).render('vegetables/Index', { vegetables: foundVegetable })
         }
    })
}

// "new" ROUTE     GET /vegetables/new   Action(new)-Display HTML form for creating a new thing
// Mongoose Function N/A
const showNewView = (req, res) =>
 {     
    // res.send('<form>Create vegetable</form>')
    res.render('vegetables/New')
 }

// "create" ROUTE     POST /vegetables    Action(create)- Create a new thing
// Mongoose Function .create
const createNewVegetable = (req, res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    // Create has two arguments:
    //   1st: the data we want to send
    //   2nd: callback function 
    Vegetable.create(req.body, (err, createdVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/vegetables')
        }
    })
}


// "seed" ROUTE   DELETE & GET /vegetables/seed    Action(destroy and create using GET not POST )
// deletes old array and creates a replacement seed array
// Mongoose Function .deleteMany and .create
const seedStarterData = (req, res) =>
     {
            // Delete all remaining documents (if there are any)
            Vegetable.deleteMany({}, (err, deletedVegetables) =>
             {
                if (err)
                {
                    res.status(400).json(err)
                } 
                else 
                {
                    console.log('deleted data.')
                    console.log(seed.vegetables)
                    // Data has been successfully deleted
                    // Now use seed data to repopulate the database
                    Vegetable.create(seed.vegetables, (err, createdVegetable) => 
                    {
                    if (err)
                    {
                    res.status(400).json(err)
                    }
                    else
                    {
                    res.status(200).redirect('/vegetables')
                    }
                    })
                 }
             })
    }


// "clearData" ROUTE      DELETE /vegetables/   Action(destroy)
// Delete all of the documents that match conditions from the collection.Use {} to target everything
// Mongoose function .deleteMany
const clearData = (req, res) => {
    Vegetable.deleteMany({}, (err, deletesAll) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/vegetables')
        }
    })
}




// "show" ROUTE     GET /vegetables/:id     Action(show)-Display a specfic thing
// Mongoose Function .findById
const showOneVegetable = (req, res) => {
    // findById accepts two arguments:
    //   1st: the id of the document in our database
    //   2nd: callback (with error object and found document)
    Vegetable.findById(req.params.id, (err, foundVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('vegetables/Show', { vegetable: foundVegetable })
        }
    })
}


// "edit" ROUTE      GET /vegetables/:id/edit   Action(edit)- return an HTML form for editing a thing
// Mongoose function .findById
const showEditView = (req, res) => {
    Vegetable.findById(req.params.id, (err, foundVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('vegetables/Edit', { vegetable: foundVegetable })
        }
    })
}

// "update" ROUTE     PUT /vegetables/:id       Action(update)- update a specific thing
// Mongoose Function .findByIdAndUpdate
const updateOneVegetable = (req, res) => {

    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

    // findByIdAndUpdate takes 4 arguments:
    //    1st: the id 
    //    2nd: new data we want to use to update the old document
    //    3rd (optional): an options object, which looks like this:  { new: true }
    //    4th: callback (with error object and foundVegetable or updatedVegetable)
    Vegetable.findByIdAndUpdate(req.params.id, req.body, (err, foundVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/vegetables/${req.params.id}`)
        }
    })
}


// "destroy" ROUTE     DELETE /vegetables/:id      Action(destroy)- delete a specific thing
// Mongoose function .findByIdAndDelete
const deleteOneVegetable = (req, res) => {
    // console.log('in delete route')
    // res.send('Deleting a vegetable at index! (in DB)')
    
    Vegetable.findByIdAndDelete(req.params.id, (err, deletedVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/vegetables')
        }
    })
}

module.exports = {
    findAllVegetables,
    showNewView, 
    createNewVegetable,
    seedStarterData,
    showOneVegetable,
    showEditView,
    updateOneVegetable,
    deleteOneVegetable,
    clearData
}