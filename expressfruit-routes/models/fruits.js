// Setup data

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
    }
];

/*
PUT REQUEST
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    }

PATCH REQUEST
    {
        readyToEat: true
    }
*/

module.exports = fruits