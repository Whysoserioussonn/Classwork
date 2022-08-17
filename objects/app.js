/*
// arrays   0         1        2
let arr =['kiwi', 'banana', 'apple']

//ojbect literal
let cat =
 {
    //name the property then colon  then the values seperated by commmas
    // think of property as string values
    name: 'Mr.Bean',
    fur: 'gray, black, and white',
    legs: 4,
    legs: 2,  // will print out 2, not the 4 because its the same key name
    age:3,
    favoriteThings: ['yarn', 'string', 'ball'],
    canSpeakFrench: false,
    meow: function()  // call a method, this is a function inside an object
    {
        console.log('meow') // when we call the meow method 
                            // it will meow
    },
    purr: () => 
    {
        console.log('purr')
    },
    talk(speech)
    {
        console.log(speech)
    }
 }
// access a propery with dot notation
 console.log(cat)
 console.log(cat.name)  // returns Mr. Bean
 console.log(cat.fur)
 console.log(cat.legs)


 //access a property with brackets

 console.log(cat['name'])
// can also do this
 let propName = 'fur'
 console.log(cat[propName])

 console.log(cat)
 cat.breed = 'calico'
 console.log(cat)
 cat.temperament = 'mild'
 console.log(cat)

//didnt feed cat example, can chane the value
cat.temperment = 'angry'
console.log(cat)
console.log(cat.favoriteThings)  // access array in objects
console.log(cat.favoriteThings[0]) // access value in array in objects

// use arrays for lists, and if you wanted more added value, use objects

//cat= 'nothing'

console.log(cat)

if (cat.canSpeakFrench)
{
    console.log('Oui')
    
}
else console.log('no')

for (let i=0; i< cat.legs; i++)
{
    console.log('LEG')
}

cat.meow() // function ... how do we run it again, WITH ()
cat.purr()
cat.talk('Hello')

//arr.forEach()
//arr.map()
//arr.filter()
//arr.reduce()

// Extra things
// for loor for arrays
for(let item of arr  )
{

}

// for... in loop for objects
// have to put 'in', and cat has to be an object
for (let key in cat)
{
    // key represents.... furn, name, legs
    console.log('key: ', key)  // list all the values
    // key is a string value
    // use the sting value of the key with bracken notation to acces the objects
   
    console.log('value: ', cat[key])  // gives us the value
    console.log()
}
*/
// 
let gamer =
 {
    name: 'ZeroCool',
    games: ['CALL OF DUTY', 'CIV VI', 'WATCH DOGS 3'],
    canPlayGamesAndWatchTVSameTime: true,
    play: function() 
      {
        console.log('Turns on PS4') 
      },
    GetsHungry: () => 
    {
        console.log('Order a Pepperoni Pie')
    },
 }
console.log(gamer)
gamer.play()
gamer.GetsHungry()
console.log()

let dog =
 {
    
    name: 'Fife',
    games: ['Catch', 'Roll Over', 'Get the Newspaper'],
    canEatPizzaCrust: true,
    hungry: function() 
     {
        console.log('Bark Bark') 
    },
    pee: () => 
    {
        console.log('Stand near front door')
    },
 }
console.log(dog)
dog.hungry()
dog.pee()
console.log()


/*
1) create a function that takes a string as an argument and returns an object
that keeps count of the occurences of each character
example: characterCounter("hello")    ->  {h: 1, e:1, l:2, o:1}
*/

const countChar = function(str) {
  let myObj= {};
  for (let char of str) {  //iterates through each character of the string
      if ( myObj[char] ) {  //if we have a count for the character we can increment
         myObj[char]++ 
      } else {
        myObj[char] = 1 //if we don't have a count we have to create it
      }
  }
  return myObj;
}


console.log(countChar('antidisestablishmentarianism'))

/*

2) Redo the denomination problem from yesterday. Instead of returning a string, 
retunn an object with each denomination as a property and how many of each as
a value
example: { fifty: 3, twenty: 2}
*/

const dollarChange = function(price, money)
{
    let returnValue = money - price;
    let change = {};
    
    const billTypes = ["hundred",'fify', 'twenty', 'ten', 'five', 'one'];
    const billValues = [100, 50, 20, 10, 5, 1]
    var amount;
    for (let index = 0; index<billValues.length; index++)
    {
    amount = Math.floor(returnValue/billValues[index]);
    if (amount >0)
    {
        change[billTypes[index]] = amount;
        returnValue = returnValue%billValues[index];
    }
    }
    return change;
}
console.log(dollarChange(1790, 2000))