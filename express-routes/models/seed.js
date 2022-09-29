// Starter data to refresh the documents in our database
const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    },
    {
        name: 'kiwi',
        color: 'green',
        readyToEat: false
    },
    {
        name: 'papaya',
        color: 'orange',
        readyToEat: true
    }
];

const meat = [ {
    name:'steak',
    color: 'brown',
    readyToEat: true
},
{
    name:'hotdog',
    color: 'pink',
    readyToEat: true
},
{
    name:'raw ground beef',
    color: 'pink',
    readyToEat: false
},
{
    name: 'mortadella',
    color: 'pink',
    readyToEat: true
},
{
    name: 'filet mignon',
    color: 'brown',
    readyToEat: true
}]

const vegetables = [ {
    name:'beet',
    color: 'red',
    readyToEat: true
},
{
    name:'lettuce',
    color: 'green',
    readyToEat: false
},
{
    name:'pepper',
    color: 'yellow',
    readyToEat: true
},
{
    name: 'brocolli',
    color: 'green',
    readyToEat: false
},
{
    name: 'carrot',
    color: 'orange',
    readyToEat: true
}]

module.exports = {
    fruits,
    meat,
    vegetables
}