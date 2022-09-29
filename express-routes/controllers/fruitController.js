const Fruit = require('../models/fruit')
const seed = require('../models/seed')

// "index" ROUTE    GET /fruits  Action(index)- Displaying a list of all things
// Mongoose Function .find
const findAllFruits = (req, res) => {  
    // res.send(fruits);
    // res.render('fruits/Index', {fruits: fruits})

    // Find takes two arguments:
    //   1st: an object with our query (to filter our data and find exactly what we need)
    //   2nd: callback (with an error object and the found data)
    Fruit.find({}, (err, foundFruit) => {
        if (err)
         {
            res.status(400).json(err)
         }
         else
         {
            res.status(200).render('fruits/Index', { fruits: foundFruit })
         }
    })
}

// "new" ROUTE     GET /fruits/new   Action(new)-Display HTML form for creating a new thing
// Mongoose Function N/A
const showNewView = (req, res) =>
 {     
    // res.send('<form>Create fruit</form>')
    res.render('fruits/New')
 }

// "create" ROUTE     POST /fruits    Action(create)- Create a new thing
// Mongoose Function .create
const createNewFruit = (req, res) => {
    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    // Create has two arguments:
    //   1st: the data we want to send
    //   2nd: callback function 
    Fruit.create(req.body, (err, createdFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/fruits')
        }
    })
}


// "seed" ROUTE   DELETE & GET /fruits/seed    Action(destroy and create using GET not POST )
// deletes old array and creates a replacement seed array
// Mongoose Function .deleteMany and .create
const seedStarterData = (req, res) =>
     {
            // Delete all remaining documents (if there are any)
            Fruit.deleteMany({}, (err, deletedFruits) =>
             {
                if (err)
                {
                    res.status(400).json(err)
                } 
                else 
                {
                    console.log('deleted data.')
                    console.log(seed.fruits)
                    // Data has been successfully deleted
                    // Now use seed data to repopulate the database
                    Fruit.create(seed.fruits, (err, createdFruit) => 
                    {
                    if (err)
                    {
                    res.status(400).json(err)
                    }
                    else
                    {
                    res.status(200).redirect('/fruits')
                    }
                    })
                 }
             })
    }


// "clearData" ROUTE      DELETE /fruits/   Action(destroy)
// Delete all of the documents that match conditions from the collection.Use {} to target everything
// Mongoose function .deleteMany
const clearData = (req, res) => {
    Fruit.deleteMany({}, (err, deletesAll) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/fruits')
        }
    })
}




// "show" ROUTE     GET /fruits/:id     Action(show)-Display a specfic thing
// Mongoose Function .findById
const showOneFruit = (req, res) => {
    // findById accepts two arguments:
    //   1st: the id of the document in our database
    //   2nd: callback (with error object and found document)
    Fruit.findById(req.params.id, (err, foundFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('fruits/Show', { fruit: foundFruit })
        }
    })
}


// "edit" ROUTE      GET /fruits/:id/edit   Action(edit)- return an HTML form for editing a thing
// Mongoose function .findById
const showEditView = (req, res) => {
    Fruit.findById(req.params.id, (err, foundFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('fruits/Edit', { fruit: foundFruit })
        }
    })
}

// "update" ROUTE     PUT /fruits/:id       Action(update)- update a specific thing
// Mongoose Function .findByIdAndUpdate
const updateOneFruit = (req, res) => {

    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

    // findByIdAndUpdate takes 4 arguments:
    //    1st: the id 
    //    2nd: new data we want to use to update the old document
    //    3rd (optional): an options object, which looks like this:  { new: true }
    //    4th: callback (with error object and foundFruit or updatedFruit)
    Fruit.findByIdAndUpdate(req.params.id, req.body, (err, foundFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/fruits/${req.params.id}`)
        }
    })
}


// "destroy" ROUTE     DELETE /fruits/:id      Action(destroy)- delete a specific thing
// Mongoose function .findByIdAndDelete
const deleteOneFruit = (req, res) => {
    // console.log('in delete route')
    // res.send('Deleting a fruit at index! (in DB)')
    
    Fruit.findByIdAndDelete(req.params.id, (err, deletedFruit) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/fruits')
        }
    })
}

module.exports = {
    findAllFruits,
    showNewView, 
    createNewFruit,
    seedStarterData,
    showOneFruit,
    showEditView,
    updateOneFruit,
    deleteOneFruit,
    clearData
}