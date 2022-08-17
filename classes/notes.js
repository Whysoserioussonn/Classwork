
class Vehicle //  class names have Capital letter
{
    // vin: 'x123y
    // make: 'Boeing'

constructor(vinParam,makeParam,makeModel) 
{
    this.vin = vinParam;
    this.make = makeParam;
    this.model = makeModel;
    this.running = false;
    
    console.log('creating a new instance of vehicle')
}
// make a method
goVroom()
    {
        console.log('vroom!')
    }

start()
{
    this.running =true;
    console.log('running')
}
stop()
{
    this.running =false;
    console.log('stopped running')
}

toString()
{
    return ' Vehicle (' + this.vin + ') is a ' + this.make + ' model ' + this.model;
}

}

const toyota = new Vehicle('X123Y', 'Boeing')
const tesla = new Vehicle()
const lexus = new Vehicle('NJ123', 'Lexus','RX')
console.log(toyota, tesla, lexus)


let arr = [1,2,3]
//arr.forEach()

let arr2 = new Array(1,2,3)  // use same set up and pass it arguments for aray

console.log(arr2)

arr2.forEach((x) => console.log(x))

toyota.start()
toyota.stop()

//toString method

console.log(lexus.toString())