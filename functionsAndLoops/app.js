// fucntion declaration / definition
// can use function anywhere you want
function sayHello()
// curly brackets think scope
{
    return 'Hello!'
}


//function expression
// take a nameless function and assign it to a variable
// can only use function below curly brackets
const sayHi = function() 
{
    return 'Hi!'
}


// arrow function
// single line expression , returns whatever comes after arrow =>
const sayHey = () => 'Hey'

// tell javascript to run the function

// give the function a name and paranthesis 
sayHello() // this is evaluating a string 'Hello', value doing nothing 

console.log(sayHello())
console.log(sayHi())
console.log(sayHey())


function add(num1,num2)
{
    return num1 + num2
}

console.log(add(2,3))
console.log(add(5,5))
console.log(add(10,1))
console.log(add(3,8))
console.log('Bob','The Builder')

// Exercise 1
function area(width, height)
{
    return width * height
}
console.log(area(5,10))

//Exercise 2
function planetHasWater(planet)
{
    if (planet == 'Earth')
    return true

    else if (planet == 'Mars')
    return true

    else return false
}

console.log(planetHasWater('Mars'))
console.log(planetHasWater('Earth'))
console.log(planetHasWater('Venus'))

//Exercise 3 create an arrow version of both exercies

//const area2 = (width,height) => width*height

//console.log(area2(5,5))

const planetHasWater2 = (planet) => (planet == "earth" || planet == "mars") ? 'true' : 'false';
console.log(planetHasWater2("earth"))
console.log(planetHasWater2("mars"))
console.log(planetHasWater2("venus"))
    
// inside () we have three different statements
// statement 1:  declare and initialize a variable scoped to that loop
// statement 2: is the condition when true ,it runs the code
// statmeent 3: incrementing of the variable in order to eventually break the loop
//for(let i =0; i<10; i++) 

//{
//console.log(i)
//}


//LOOPS
// Write a for loop that counts down from 10 to 1

for (let j=10; j>0; j--)
{
    console.log(j)
}

// Write a for loop for the given output; 1,3,5,7,9,2,4,6,8,10

for (let k=1; k<10; k=k+2)
{
    console.log(k)
}
    for (let l=2; l<11; l=l+2)
    {
        console.log(l)
    }

    // Create a loop that outputs mult of 3 starting at 6 ending at 60

    for(let m=6; m<61;m=m+3)
    {
        console.log(m)
    }
    // write a loop that does half a pyramid
    let text = "";
    for(let index = 0; index <7; index++)
    {
        console.log(text += "#");
    }

    // Print Even numbers
    // Using the remainder % operator , write a for loop that iterates between 0 and 10 a
    // and prints all even numbers


    // Write a for loop that iterates from 1-20. Prints "prime" for all prime numbers
    //even for all even numbers, and odd for all odd numbers
    //Treat 2 as even, and 1 & 3 as odd

    //while loops

    let a=1;

    while(a<10)
    {
        console.log(a)
        a++
    }

    console.log(a)

    //Exercise printing integers in mult of 3 as long as integers
    // are less than 35 using a while loop

    let b=3;
    while(b<35)
    {
        console.log(b)
        b=b+3
    }

    // Keep printing integers in mult of 5 as long as integers are less than 100

    let c=5;
    while(c<100)
    {
        console.log(c)
        c=c+5
    }

    // Using a while loop print integers from 0 to 20. all numbers divisible
    // by 2 should be multiplied by 3 before they are output.
    // All other integers should not be output, hint use modolo

    let d=0;
    while(d<=20)
    {
        if (d%2 ==0)
         
        {console.log(d*3)}
        else
        console.log("")
        d++;
    }

    // Using a while loop, print out all prime numbers between 0=20

    let i=2;
while (i < 20) 

{
     if (i==2 ||i==3)
     {console.log(i)}
     if (i % 2 != 0 && i % 3 != 0) 
     {
         console.log(i);
     }
     i++;
}

let primeCheckNumber;
  let n = 1;
  let divisibleCount;


  // 2nd way to get prime numbers less than 20
  while (n <= 20) 
  {
   divisibleCount = 0;
   primeCheckNumber = 2;
   while (primeCheckNumber <= n / 2)
    {
    if (n % primeCheckNumber == 0) 
      {
        divisibleCount++;
        break;
      }
      primeCheckNumber++;
   }
   if (divisibleCount == 0 && n != 1)
    {
    console.log(n + " ");
   }
   n++;
  }

  // Nando went to the vending machine to buy a cookie, The cookie costs $4.00. He paid with a $10 bill. 
  // the machine only gives change back in quarters, write a loop that shows
  // how many quarters he gets in return

  let price = 4;
let money=10;
let quarters=0;
while (price<money)
{
    money=money-.25;
    quarters++;
}
console.log(quarters)