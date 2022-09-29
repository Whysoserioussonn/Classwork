const Meat = require('../models/meat')
const seed = require('../models/seed')

// "index" ROUTE    GET /meat  Action(index)- Displaying a list of all things
// Mongoose Function .find
const findAllMeats = (req, res) => {  
    // res.send(meat);
    // res.render('meat/Index', {meat: meat})

    // Find takes two arguments:
    //   1st: an object with our query (to filter our data and find exactly what we need)
    //   2nd: callback (with an error object and the found data)
    Meat.find({}, (err, foundMeat) => {
        if (err)
         {
            res.status(400).json(err)
         }
         else
         {
            res.status(200).render('meat/Index', { meat: foundMeat })
         }
    })
}

// "new" ROUTE     GET /meat/new   Action(new)-Display HTML form for creating a new thing
// Mongoose Function N/A
const showNewView = (req, res) =>
 {     
    // res.send('<form>Create meat</form>')
    res.render('meat/New')
 }

// "create" ROUTE     POST /meat    Action(create)- Create a new thing
// Mongoose Function .create
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


// "seed" ROUTE   DELETE & GET /meat/seed    Action(destroy and create using GET not POST )
// deletes old array and creates a replacement seed array
// Mongoose Function .deleteMany and .create
const seedStarterData = (req, res) =>
     {
            // Delete all remaining documents (if there are any)
            Meat.deleteMany({}, (err, deletedMeats) =>
             {
                if (err)
                {
                    res.status(400).json(err)
                } 
                else 
                {
                    console.log('deleted data.')
                    console.log(seed.meat)
                    // Data has been successfully deleted
                    // Now use seed data to repopulate the database
                    Meat.create(seed.meat, (err, createdMeat) => 
                    {
                    if (err)
                    {
                    res.status(400).json(err)
                    }
                    else
                    {
                    res.status(200).redirect('/meat')
                    }
                    })
                 }
             })
    }


// "clearData" ROUTE      DELETE /meat/   Action(destroy)
// Delete all of the documents that match conditions from the collection.Use {} to target everything
// Mongoose function .deleteMany
const clearData = (req, res) => {
    Meat.deleteMany({}, (err, deletesAll) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/meat')
        }
    })
}




// "show" ROUTE     GET /meat/:id     Action(show)-Display a specfic thing
// Mongoose Function .findById
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


// "edit" ROUTE      GET /meat/:id/edit   Action(edit)- return an HTML form for editing a thing
// Mongoose function .findById
const showEditView = (req, res) => {
    Meat.findById(req.params.id, (err, foundMeat) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('meat/Edit', { meat: foundMeat })
        }
    })
}

// "update" ROUTE     PUT /meat/:id       Action(update)- update a specific thing
// Mongoose Function .findByIdAndUpdate
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


// "destroy" ROUTE     DELETE /meat/:id      Action(destroy)- delete a specific thing
// Mongoose function .findByIdAndDelete
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
    deleteOneMeat,
    clearData
}