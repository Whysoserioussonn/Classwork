
 /////////////////////////////////
//Fizzbuzz
/////////////////////////////////
for (let i = 1; i <= 100; i++) 
{
  if (i % 3 == 0 & i % 5 == 0)
  {
    console.log('FizzBuzz')
  } else if (i % 3 == 0)
  {
    console.log('Fizz')
  } else if (i % 5 == 0) 
  {
    console.log('Buzz')
  } 
  else console.log(i)
}
/////////////////////////////////
//Wild Wild Life
/////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant", 5000, "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-to"]
const dart = ["D'art", "Demogorgan Dog", 2, "Upside Down"]
/*
Plantee just had a birhtday, change plantee's array to be a year older
*/
plantee[2]++
console.log(plantee[2])
/*
Chnage Wolfys hometown to 'Gotham City'
*/
wolfy[3] = 'GOtham City'
console.log(wolfy[3])
/*
Give D'art a second hometown by adding 'Hawkins' 
*/
dart.push('Hawkins')
console.log(dart[4])
/*
Porgee decides that Wolfy cant be named wolfy anymore.
Remove Wolfy from wolfy array and replace with gameboy
*/
wolfy[0]= 'Gameboy'
console.log(wolfy[0])

///////////////////////////
//Yell at the Ninja Turtles
////////////////////////////

const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
for (variable of ninjaTurtles)
{
  console.log(variable.toUpperCase())
}
////////////////////////////////
// Methods, Revisted
////////////////////////////////
const favMovies = ["Jaws", "The Fellowship of the Ring", "Howl's Moving Castle", "Django Unchained", "Titanic"]

console.log(favMovies.indexOf('Titanic'))
favMovies.sort()
console.log(favMovies)
// It put the array in alphabetical order, its NOT peremently altered.
favMovies.push('Guardians of the Galaxy')
console.log(favMovies)
favMovies.reverse()
console.log(favMovies)
favMovies.shift()
console.log(favMovies)
favMovies.unshift('Forrest Gump')
console.log(favMovies) // it put 'Forest Gump' at the beginning of the array
favMovies.splice(5,1, "Avatar")
console.log(favMovies) // Yes it permamently altered the array, it took out Django Unchained

// console.log(favMovies.unshift())
console.log(favMovies.slice(favMovies.length/2))
console.log(favMovies.indexOf('FastnFurios'))  // returns -1 becasue it is not in the array
// We can declare favMovies with const because it still defines a constant reference to an array where the the elements inside can be changed.

///////////////////////////
// WHERE IS WALDO
///////////////////////////

const whereIsWaldo = [['Timmy', 'Frank'], 'Eggbert', ['Lucinda', 'Jacc', 'Neff', 'Snoop'], ['Petunia', ['Baked Goods', 'Waldo']]];

whereIsWaldo.splice(1, 1); // removed 'Eggbert'
console.log(whereIsWaldo)
whereIsWaldo[1][2] = 'No One'; // changed 'Neff' to 'No One'
console.log(whereIsWaldo) /

console.log(whereIsWaldo[2][1][1]); // access and console 'Waldo'

///////////////////////////////
//Excited Kitten
//////////////////////////////

for(let i =1; i<=20; i++)
console.log("Love me, pet me! HSSSSSS!")

const catTalk = ['...human...why you taking pictures of me?...',
'...the catnip made me do it...',
'...why does the red dot always get away...']

for (let i = 0; i < 20; i++)
{
   if (i % 2 === 0)
    {
     console.log(catTalk[Math.floor(Math.random() * catTalk.length)])
    }
    else 
    console.log("Love me, pet me! HSSSSSS!")
}


////////////////////////////////
//Find the Median
////////////////////////////////

const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];
let med = Math.floor(nums.length/2);
nums.sort();
console.log(nums + '')
console.log(nums[med]);



////////////////////////////////
// Return of the Closets
///////////////////////////////

const kristynsCloset = [
    'left shoe',
    'cowboy boots',
    'right sock',
    'GA hoodie',
    'green pants',
    'yellow knit hat',
    'marshmallow peeps',
  ]
  
  const thomsCloset = [
    [
      'grey button-up',
      'dark grey button-up',
      'light blue button-up',
      'blue button-up',
    ],
    ['grey jeans', 'jeans', 'PJs'],
    ['wool mittens', 'wool scarf', 'raybans'],
  ]
  
  
////////////////////
// Alien Attire
///////////////////

const kristynsShoe = kristynsCloset.shift();

thomsCloset[2].push(kristynsShoe);

console.log(thomsCloset)


//////////////////////////
// Dress Us Up
/////////////////////////


//Kirstys 3 oufits
const kristynOutfit1 = `Kristyn is styling and profiling ${kristynsCloset[3]}, with a snazzy ${kristynsCloset[4]} and a superfly ${kristynsCloset[5]}`
const kristynOutfit2 = `Kristyn is styling and profiling ${kristynsCloset[0]}, with a snazzy ${kristynsCloset[1]} and a superfly ${kristynsCloset[2]}`
const kristynOutfit3 = `Kristyn is styling and profiling ${kristynsCloset[2]}, with a snazzy ${kristynsCloset[3]} and a superfly ${kristynsCloset[0]}`
//Thoms 3 outfits
const thomsOutfit1 = `Thomas is sporting a ${thomsCloset[0][0]}, with ${thomsCloset[1][0]}, and a one of a kind ${thomsCloset[2][0]}`
const thomsOutfit2 = `Thomas is sporting a ${thomsCloset[0][1]}, with ${thomsCloset[1][1]}, and a one of a kind  ${thomsCloset[2][1]}`
const thomsOutfit3 = `Thomas is sporting a ${thomsCloset[0][3]}, with ${thomsCloset[1][2]}, and a one of a kind ${thomsCloset[2][3]}`

console.log(kristynOutfit1)
console.log(kristynOutfit2)
console.log(kristynOutfit3)
console.log(thomsOutfit1)
console.log(thomsOutfit2)
console.log(thomsOutfit3)


///////////////////////////////////
// Dirty Laundry
//////////////////////////////////

kristynsCloset.forEach(clothing =>
    console.log(`WHIRR: Now washing: ${clothing}`)
  )
  ////////////////////////////////
  //Inventory
  ////////////////////////////////

  
//using BRACKET NOTATION, log the arrays 
console.log(thomsCloset[0])
console.log(thomsCloset[1])
console.log(thomsCloset[2])
