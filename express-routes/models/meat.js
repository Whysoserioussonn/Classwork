//load mongoose
const mongoose = require('mongoose')

// adda  shortcut to Schema
const Schema = mongoose.Schema

//create our Schema
const meatSchema = new Schema({
    name: { type: String, required: true }, 
    color: { type: String, required: true }, 
    readyToEat: Boolean
})

//create model from Schema with 2 arguments
// 1st argument is name of const variable for model,2nd argument is name of Schema
const Meat = mongoose.model('Meat', meatSchema)


module.exports= Meat;