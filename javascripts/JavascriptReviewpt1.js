// I. Variables & Datatypes
           //     A. Questions and Answeers

/*
1)How do we assign a value to a variable? 
A. with the assigment operator

2)How do we change the value of a variable? 
A. const value cant be changed, let value can be changed by reassigning with the assignment operator without declaring it again. 

3)How do we assign an existing variable to a new variable?
A. Declare the new variable , add the assignement operator, and then the name of the existing variable
ex. let newValue = oldValue; 
4)Remind me, what are declare, assign, and define?
A.Declare is when you first declare a variable with const or let
Assign is when you give value to a variable
Defining a variable requires declaration and then initializing it with a value.
Defininig a function requires the function keyword followed by the name of the function, a list of parameters to the function enclosed in parathesis seperated by commas, followed by statements that define the function wrapped in curly brackets

5) What is pseudocoding and why should you do it? its a short way of coding like a rough draft without actually coding. The benefit is that it plans out the solution. 

6) What percentage of time should be spent thinking about how you going to solve a problem vs actually typing in code to solve it? 
A. 90% understanding it, that involves planning ,testing to have a clear solution to avoid bug fixes in the future,


//B.Strings
//1) create a variable called firstVarible\


let firstVar = "Hello World!";
firstVar = 5;
let secondVar = firstVar;
secondVar= 'Morning!';
//value is 5
let yourName = "Henry";
let newStr = 'Hello my name is ' + yourName;

console.log(firstVar)
console.log(newStr)

// C Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin'

console.log(a<b);
console.log(c>d);
console.log('Name'=='Name');
console.log(true || false);
console.log(false &&false &&false &&false &&false || true)
console.log(e === 'Kevin')
console.log(a+b==c);
console.log(a*a==d);
console.log(48=='48')

        //    D The Farm

        let animal = "cow"
let secondAnimal= "fox";
if (secondAnimal== 'cow')
{
console.log("moo")
} 
else 
{
    console.log("Hey!'You're not a cow!")
}
console.log(animal==secondAnimal)

             //   E Drivers Ed

             function checkAge(age) {
                if (age>16){
                    console.log("Here are the keys!")
                } else {
                    console.log("Sorry, you're too young.")
                }
            }
            checkAge(33)
            checkAge(10)
 
             
 II. Loops

        A) The basics
1) Write a loop that will print out all the numbers from 0 to 10,inclusive.
A- 
for (let i=0;i<=10;i++)
{
    console.log(i)
}

2)Write a loop that will print out all the numbers from 10 up to and including 400.
A- 
for (let i=10;i<=400;i++)
{
    console.log(i)
}

3) Write a loop that will print out every third number starting with 12 and going no higher 
than 4000.
A- 
for (let i=12;i<=400;i+=3)
{
    console.log(i)
}

            B. Get even
            
1)Print out the numbers that are within the range of 1-100
A- 
for (let i=2;i<=100;i+=2)
{
    console.log(i)
}

2) Adjust your code to add a message next to even numbers only that says: "<-is an even number"
A- 
for (let i=2;i<=100;i+=2)
{
    console.log(i + ' <- is an even number')
}


            C. Give me Five
            
1) For the numbers 0-100, print out "I found a number. High five!" if the number is a multiple of five
Example output: 
I found a 5. High five!
I found a 10. High five!
A-
 for (let i = 0; i <= 100; i++) {
   if (i % 5) 
   {
    console.log('I found a ' + i + '. High five!')
  }
}

2) Add to the code from above to print out "I found a number Three is a crowd" if three is a multiple of three
Example output:
I found a 3. Three is a crowd
I found a 5. High five!

A- 
for (let i = 0; i <= 100; i++) 
{
  if (i % 3 == 0) 
  {
    console.log('I found a ' + i + '. Three is a crowd.')
  } 
  else if (i % 5) 
  {
    console.log('I found a ' + i + '. High five!')
  }
}

3) For numbers divisible by both 3 & 5, make sure you code prints both messages.

A- 
for (let i = 0; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('I found a ' + i + '. Three is a crowd. High five!')
  } else if (i % 3 == 0) {
    console.log('I found a ' + i + '. Three is a crowd.')
  } else if (i % 5) {
    console.log('I found a ' + i + '. High five!')
  }
}

          D. Savings account. 

1) write code that will save the sum of all the numbers between 1-10 to a variable called bank_account. Check your work! Your bank_account should have $55 in it. 

A- 
let bank_account = 0
for (let i = 1; i <= 10; i++) 
{
  bank_account += i;
}

2) You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1-100 multiplied by 2. Check your work! Your bank_account should have $10,100 in it. 

A-
let new_bank_account = 0
for (let i = 1; i <= 100; i++) {
  bank_account += (i * 2)
}


            III Arrays & Control flow
            
            A. Talk about it:

1) What are the things in an array called?

A- they are called elements 

2) Do arrays gurantee those things will be in order?

A- No

3) What real-life thing could you model with an array?

A- list of favorite movies

            B. Easy Does It
            
1) Create an array that contains three quotes and store in a variable called quotes.
A-
const quotes = ["To be or not to Be","Every man dies, not every man lives", "Live as one of them Kal-El"]

            C. Assessing elements
            
 GIven the following array const randomThings = [1, 10, "Hello" , true]
 
 1) How do you access the 1st element in the array?
 A- 
  randomThings[0]

 2) Change the value of "Hello" to "World"
 A- 
 
 randomThings[2] = "World"
 

 3) Check the value of the array to make it updated the array. How? Why, Yes! console.log();
 A-
console.log(randomThings)  // checks the value of the array
 
            D. Change values
Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

1) What would you write to access the 2rd element of the array?
A- ourClass[2]


2) Change the value of "Github" to "Octocat"
A- ourClass[4] = "Octocat"

3)Add a new element, "Cloud City" to the array
A- ourClass.push("Cloud City")

                E.Mix It Up
You don't really need .splice(), you could use it but there are simpler array methods that are more appropiate.
Given the following array: const myArray = [5, 10, 500, 20]

1) Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array. 
A- myArray.push('Aegon')
   myArray.push('Maximus')

2) Remove the 5 from the beginning of the array.
A- myArray.shift()

3) Add the string "Bob Marley" to the beginning of the array. 

A- myArray.unshift('Bob Marley')

4) Remove the string of your choice from the end of the array.

A- myArray.pop()

5) Reverse this array using Array.protoype.reverse(). Did you mutate the array? What does mutate mean? DId the .reverse() method return anything?

A-
myArray.reverse()
console.log(myArray)
Yes, the array was mutated
Mutate the array means to alter the array
The reverse method does not return a new list, it just reverses the same list.

//////////////////////////////////////////////
// F. Biggie Smalls
/////////////////////////////////////////////

Create a variable that contains an integer.
Write an if ... else statement that:

1) console.log() s "little number" if the number is entered is < 100
2) console.log() s "big number" if the number is entered is >= 100

Let num = 343;
if (num<100)
 console.log("little number")
} else {
  console.log("big number")
}

//////////////////////////////////////
// G. Monkey in the Middle
/////////////////////////////////////

Write an if...else ...else statement:
1) console.log() little number if the number entered is < 5
2) if the number entered is more than 10, log big number
3 Otherwise, log "monkey"

A-
if (num < 5)
 {
  console.log('little number')
} 
else if (num > 10)
 {
  console.log('big number')
}
 else {
  console.log('monkey')
 }

////////////////////////////////////////////
// H. Whats in Your Closet
///////////////////////////////////////////

Below, we have given you examples of Kristens and Thom's closets modeled as data in JavaScript
const kristynsCLoset =[
"left shoe",
"cowboy boot",
"right sock",
"GA hoodie",
"green pants",
"yellow knit hat",
"marshmallow peeps"
];

// Thom's close is more complicated. Check out the nested data structure
const thomsCLoset = [
[
// these are Thom's shirts
"grey button-up",
"dark grey button-up",
"light blue button-up",
"blue button-up",
],
[ // these are Thoms pants
"grey jeans",
"jeans",
"PJs"
],
[ // Thoms accessories
"wool mittens",
"woodl scarf",
"raybans"
]
];

1) Whats Kristyn wearing today? Using bracket notations to access items in
kristynsCloset, log the setence "Kristyn is rocking that" + the third item
in Kristyn's closet + "today!" to the console.

A- console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")

2) Kristyn just bought some sweet shades! Add "raybans" to her closet after 
"yellow knit hat".

A- kristynsCloset.push("raybans")

3)Kristyn spilled coffee on her hat..modify this item to read "stained knit hat"
instead of yellow

A- kristynsCloset[5] = "stained knit hat"

4)Put together an outfit for THom! Using bracket notation, access the 
first element in Thom's shirts array.

A-  thomsCloset[0][0]

5) In the same way, access one item from Thom's pants array.

A- thomsCloset[1][0]

6) Access one item from Thom's accessories array.

A- thomsCloset[2][0]

7)Log a sentence about what Thom's wearing. Example "Thom is looking
fierce in a grey button-up, jeans, and wool scarf!"

A- 
console.log("Thom is looking muy macho in a " + thomsCloset[0][0] + ', ' + thomsCloset[1][0] + ' and a ' + thomsCloset[2][1])

8) Get more specific about what kind of PJs Thom's wearing this winter.
Modify the name of this PJ pants to 'Footie Pajams'

A- thomsCloset[1][2] = "Footie Pajamas"



/////////////////////////
// FUNCTIONS
//////////////////////

A.printGreeting
Do you think you can write a function called printGreeing with a parameter that returns a 
greeting with the argument interpolated into the greeting?
Like so?
Example- 
    console.log(printGreeting("Slimer"));
Result-
    Hello there, Slimer!

You think you could? i think so too. Feel free to skip this problem b/c you already done it.
Read entire problems carefully before doinog them from now on.     

B. printCool

Write a function 'printCool' that accepts one parameter, 'name' as an argument. The function
should print the name and a message saying that person is cool.
For example-
 console.log(printCool("Captain Reynolds"))
Result-
  "Captain Reynolds is cool"

A-
const printGreeting = name => `Hello there ${name}`
console.log(printGreeting('Captain Chunk'))

C. calculateCube

Write a function calculateCube that takes a single number and prints the volume of a cube
from that number.
For example-
  console.log(calculateCube(5))
Result-
  125

A-
let calculateCube = cube => cube ** 3;
console.log(calculateCube(3))

D. isVowel

Write a function isVowel that takes a charater (i.e a string of length 1) and returns true
if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function
on every vowel and make sure it is working. In general, when you write functions, take a 
minute to test them with different values to make sure they behave the way you want them. 
For Example-
  console.log(isVowel("a"))
Result-
  true

A-  
 const isVowel = ch => 
 {
   return (ch == 'a'|| ch =='e' || ch=='i' || ch=='o' || ch=='u')
 }
console.log(isVowel('x'))
console.log(isVowel('e'))


E. getTwoLengths
Write a function getTwoLengths that accepts two parameters(strings). The function should
return an array of numbers where each number is the length of the corresponding string.
For example-
 console.log(getTwoLengths("Hank","Hippopopalous"));
Result-
 [4,13]

 A-
 const getTwoLengths = (str1, str2) => 
{
  const array = []
  array.push(str1.length, str2.length)
  return array
}
console.log(getTwoLengths('hi','there'))

F. getMultipleLengths
Write a function getMultipleLengths that accepts a single parameter as an arguement:
an array of strings. The function should return an array of numbers where each number
is the length of the corresponding string.
For example-
  console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]))
Result-
  [5,4,2,2,4]

A-
 const getMultipleLengths = item =>
  {
   const array = []
   item.forEach(string => array.push(string.length))
   return array
 }
 console.log(getMultipleLengths(['Its', 'lunch', 'time', 'arrivederci']))  

G. maxOfThree
Define a fucntion maxOfThree that takes tree numbers as arguments and returns the largest
of them. If all numbers are the same, it doesnt matter which one is returned. If the two
largest numbers are the same, one of them should be returned. Be sure to test it with 
larger values in each of the three locations.
For example=
 console.log(maxOfThree(6,9,1))
Result-
 9

 A-
 const maxOfThree = (num1,num2,num3) => 
{
    if(num1 >= num2 && num1 >= num3) return num1
    else if (num2 >= num1 && num2 >= num3) return num2
    else return num3
}
 console.log(maxOfThree(3, 1, 7))
 console.log(maxOfThree(3, 8, 8))
 console.log(maxOfThree(32, 133, 7))

H. printLongestWord
Write a function printLongestWord that accepts a single argument, an array of strings.
The method should return the longest word in the array. in case of a tie, the method 
should return the word that appears first in the array.
For example-
  console.log(printLongestWord(["Bojack", "Princess", "Diane" "a", "Max", "Peanutbutter", "big"]))
Result-
  Peanutbutter
  
A-
function printLongestWord(arr)
{
  let longest = ''
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i].length > longest.length)  longest = arr[i]
  }
  return longest
}
 console.log(printLongestWord(['Frodo', 'LadyOfTheWoods', 'Gandalf', 'Gimli']))

 ///////////////////////////////
 // Objects
///////////////////////////////

Lets set up an object data structure. Lets say we have a website that sells products,
and we have a user of our website, and we want to store that user's data. The object
data structure is a good way to organize the data from our user. 

A. Make a user object

1. Create an object called 'user'
2. Write in to the object the key-value pairs for name, email, age, and purchased to
an empty array []. Set the other values to whatever you would like.


B. Update the user

1. Our user has changed his or her email address. Without changing the original user
object, update the email value to a new email address.
2. Our user had a birthday! Without changing the original user object, increment
the age value using the postfix operator. Hint: age++

C. Adding keya and values
You have decided to add your user's location to the data that you want to collect.

1. Without changing the original user object, add a new key location to the object,
and give it a value or some-or-the-other location (a string)

D. Shopaholic!

1. Our user has purchased an item! They have purchased some "carbohydrates". 
Using .push(), add the string 'carbohydrates' to the 'purchased' array
2. Our user has purchaed an item! They have purchased some "peace of mind"
Using .push(), add the string "peace of mind" to the purchased array.
3. Our user has purchaed an item! They have purchased some "Merino jodjpurs".
Using .push(), add the string "Merino jodhpurs" to the purchased array
4. Console.log just the "Merino jodhpurs" from the purchased array

E. Object-within-object

Remember that you can add an object to an existing object in the same way that you can 
add any new property/value pair. If want to give our user a friend with a name and age,
we could write: 
user.friend= 
{
  name:"Grace Hopper",
  age: 85
}
When we console.log user, we would see that the friend object added to our user object.

1. Write a friend object into your user object and give the friend a name, age, location,
and purchased array(empty for now)
2. console.log just the friends name.
3. console.log just the friends location.
4. CHANGE the friends age to 55.
5. The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the
friends purchased array.
6. The friend has purchased "A latte". Use .push() to add "A latte" to the friends
purchased array.
7. console.log just "A latte" from the friends purchased array. 

F. Loops

1. Write a for loop tha iterates over the User's purachsed array (NOT the friends 
  purchased array), and prints each element to the console. 
2. Write a for loop that iterates over the Friends purchased array, and prints 
each element to the console.

G. Functions can operate on objects

1. Write a single function updateUser that takes no parameters.
2. When the function is run, it should increment the user age by 1 
3. Make the user's name uppercase
The function does not need a return statement, it will merely modify the user object.
4. Write a function  oldAndLoud that performs the exact same tasks as updateUser, but
instead of hard-coding it to only work on our user object, make it take a parameter 
person, and have it modify the object that is passed in as an argument when the 
function is called. Call your oldAndLoud function with user as the argument


const user =
{
  name: 'Achilles',
  age: 30,
  email: 'forGreece@gmail.com',
  purchased: [],
}


// Answer to B
user.email = 'forTroy@gmail.com';
user.age ++;
console.log(user)


//Answer to C
user.location = "Greece"
console.log(user)


//Answer to D
user.purchased.push('carbohydrates')
user.purchased.push('piece of mind')
user.purchased.push('Merino jodhpurs')
console.log(user.purchased.pop())
console.log(user)

//Answer to E
user.friend = { 
   name: "Hector",
   age: '32',
   location: 'Troy',
   purchased: []}
console.log(user.friend.name)    
console.log(user.friend.location)
user.friend.age = 55
user.friend.purchased.push("The One Ring")
user.friend.purchased.push("A latte")
console.log(user.friend.purchased[1])
console.log(user.friend)


// Answer to F us a "for loop"
// this is the foreach method that also works
//user.purchased.forEach(item => console.log(item))
for (let i = 0; i < user.purchased.length; i++)
 {
 console.log(user.purchased[i] + "  ")
 }

for (let i = 0; i < user.friend.purchased.length; i++)
 {
 console.log(user.friend.purchased[i] + "  ")
 }

//Answer to G
const updateUser = () =>
 {
  user.age++
  user.name = user.name.toUpperCase()
 }
updateUser()
console.log(user)


const oldAndLoud = person => 
{
  console.log(person)
  person.age++
  person.name.toUpperCase()
}

oldAndLoud(user)
console.log(user)

*/

/*
///////////////////////////////
// Cat Combinator
////////////////////////////////

1. Mama cat
- Define an object called cat1 that contains the following properties:
name, breed, age(a number)
- console.log the cat's age
- console.log the cat's breed

2. Papa cat
- Define an object called cat2 and also contains the properties:
name, breed, age(a number)

3. Combine Cats!
The cats are multiplying!
Write a function combineCats that has two parameters mama and papa. The function will
take two arguments--each a cat object. 
- Pass cat1 and cat2 as arguments to the combineCats function. The function should 
console.log them.
Example:
  combineCats(cat1,cat2)
Result:
  {name: "Joe", age: 19, breed: "Mog"}  
  {name: "Jam", age: 45, breed: "Siamese"}

4. Cat brain bender

If combineCats returns an object, and if combineCats takes objects as arguments, then it stands
to reason that: catCombinator can use itself as its own argument.
Take a second to stew on that....
What is the rseult of console.log(combineCats(combineCats(cat1,cat2), combineCats(cat1,cat2)));
The above console is TWO LEVELS deep of combineCats.
-Write a console.log that is THREE LEVELS deep of combineCats. combineCats should have two arguments, each 
with are combineCats, each which have two arguments, each which are combineCats.
Your output should look something like:
{name: 'JoeJamJoeJamJoeJamJoeJamJoeJam',
age: 1,
breed: -Mog-Siamese-Mog-Siamese-Mog-Siamese-Mog-Siamese'}

A-  
//1
  cat1 =
{
  name: "Fluffy",
  age: 7,
  breed: 'Fatty'
}

//2
cat2 = 
{
  name: 'Cookie',
  age: 2,
  breed: 'Siamese'  
}
//console.log(cat1)
//console.log(cat2)

//3
 const combineCats = (cat1, cat2) => 
 {
   return {
   name: `${cat1.name}${cat2.name}`,
   age: 1,
   breed: `${cat1.breed}-${cat2.breed}`,
   }
}
console.log(combineCats(cat1, cat2))

//4
console.log(
  combineCats(
  combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)),
  combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)),
  )
)
*/