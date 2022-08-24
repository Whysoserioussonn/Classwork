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
*/

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

// C Strings

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
 
             
/* II. Loops

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
The reverse method does not return a new list, it just reverses the same list
.
                F. Biggie Smalls


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

                // G. Monkey in the Middle

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

                // H Whats in Your Closet


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









*/