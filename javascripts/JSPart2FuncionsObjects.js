/*
        IV. FUNCTIONS

AA.printGreeting


Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting? 

Like so?

Example:  console.log(printGreeting(“Slimer”));

Expected output: Hello there, Slimer!

You think you could? I think so too. Feel free to skip this problem, because you already done it. If you done the problem twice, read te entire problem carefully before doing them from now on.


B.printCool


Write a function printCool that accepts one parameter, name as an argument. The function

should print the name and a message saying that the person is cool.

For example : console.log(printCool(“Captain Reynolds”));

Expected output :  “Captain Reynolds is cool”;


A- 
function printCool(word)
{
    return word + " is cool"
}
console.log(printCool('Captain Reynolds'))

C.calculateCube

Write a function calculateCube that takes a single number and prints the volume of a
a cube made from that number. 

For example: console.log(calculateCube(5));
Expected output: 125

A-  
function CalculateCube(num)

{
return num * num * num
}
console.log(CalculateCube(3))}

D.isVowel

Write a function isVowel that takes a character (i.e. string of length 1) and returns
true if it is vowel, false otherwise. The vowel could be upper or lower case.
Test your function on every vowel and make sure its working. In general,
when you write functions, take a minute to test them with different values
to make sure they behave the way you want. 
Example: console.log(isVowel("a"));
Expected output : true

A-
function isVowel(x) 
{

    let result;

    result = x.toUpperCase() == "A" || x == "E" || x == "I" || x == "O" || x == "U";
    return result;
}

console.log(isVowel('a'))
console.log(isVowel('g'))
console.log(isVowel('a3'))

E. getTwoLengths

Write a function getTwoLengths that accepts two parameters(strings).
The function should return an array of numbers where each number is 
the length of the corresponding string.
For example: console.log(getTwoLengths("Hank", "Hippopopalous"));
Expected output: [4,13]

A-
function getTwoLengths(word1, word2)
{
    let newArray=[];
    newArray.push(word1.length)
    newArray.push(word2.length)
    return newArray
}
console.log(getTwoLengths('hi','bye'))

F. getMultipleLengths
Write a function getMultipleLengths that accepts a single parameter as an 
argument:an array of strings. The function should return an array of numbers
where each number is the length of the corresponding string. 
For Example: console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]))
Expected Output: [5,4,2,2,4]

A-
const getMultipleLengths = arr => 
{
   let newArr = []
   arr.forEach(word => newArr.push(word.length))
  return newArr
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

G.maxOfThree

Define a function maxOfThree that takes three numbers as arguments and returns 
the largest of them. If all numbers are the same, it doesnt matter
which one is returned. If the two largest numbers are the same, one of them
should be returned. Be sure to test with larger values in each of the three locations.
For example: console.log(maxOfThree(6,9,1))
Expected result: 9
A-
const maxOfThree = (arg1, arg2, arg3) =>
{
 if (arg1 > arg2 && arg1 > arg3)
 {
     return arg1
 }
 else if (arg2>arg3) 
 {
     return arg2
 }
else return arg3
}
console.log(maxOfThree(6,9,1))
console.log(maxOfThree(6,6,1))
console.log(maxOfThree(6,9,13))


H.printlongestWord

Write a function printLongestWord that accepts a single argument, an array
of strings. The method should return the longest word in the array. In case
of a tie, the method should return the word that appears first int the array.
For example: console.log(printLongestWord(["Bojack", "Princess", "Diane", 
"a", "Max", "Peanutbutter", "big"]))
Expected result: Peanutbutter

A-
const printLongestWord = arr =>
{
 let longest = 0  
 let longestword;
arr.forEach( (element) => 
{
    if (element.length > longest)
    {
      longest = element.length;
      longestword = element;
    }
})
return longestword
}
console.log(printLongestWord(["Anakin", "Vader", "Skywalker", 
"Chubacca", "Jabba", "Boba", "Daywalker"]))




                        OBJECTS

Lets set up an object data structure. Lets say we have a website that sells
products, and we have a user of our website, and we want to store that user's 
data. The object data structure is a good way to organize the data from our user.

A, Make a user object
1. Create an object called user.
2. Write in the object the key-value pairs for name,email, age, and purchased.
Set the value of purchased to empty array[]
Set the other values to whatever you like.


B. Update the user
1. Our user has changed his or her email address.Without changing the original 
user object, update the email value to a new email address.
2. Our user has had a birthday! Without changing the original user object,
incremenet the age value using the postfix operator. Hint age++

C. Adding keys and values

You have decided to add your user's location to the data that you want to collect.
Without changing the original user object, add a new key location to the object,
and give it a value or some-or-other lcoation(a string)

*/
