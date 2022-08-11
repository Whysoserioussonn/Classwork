let age = 8;

age = 9;

//c Constant
//const age = 9;

//Data types

// Number
const age2= 10;

//Strings
const name ='Shakespear "to be or not to be" '
const name2 = 'Jade'
const name3 = `Jade`

//Boolean
const employed = true
//Undefined

const example = undefined;

// NULL explicitly give no value
const example2= null;

//String operator
let firstName = "Bob"
let lastName = "The bulder"
let fullName = firstName + lastName
let concatenation = "con" +"cat"

console.log(concatenation)
console.log(fullName)

//Pascal case
//myFavoriteDesert

//Kebab case
// my-favorite-desert

//Logical opearators

// AND &&
// OR !!
// NOT !

//Shorthands

let fire = 0;  //0

fire -= 10       //-10

//only for increminting or decrementing by 1
fire-- // incrementing by 1      -11
// fire = fire - 1
fire++ // decrementing by 1       -10
// fire = fire + 1
fire = fire - 10      // -20   

console.log(fire)

// Loose comparsion (uses type Coercion)
// == (2 equal signs)

// Strict comparison
// === (3 equal signs)

// Assignment Operator
// = (1 equal sign)

let x = 6
let y = 3
console.log(x < 10 && y >1)  // true // true 

console.log(x==5 || y==5)   // false // false

console.log(!(x==y))      //true

let num1 = 5;
let num2 = 7;
let sum =  num1 + num2;
console.log(sum)

let num3 = 10;
let num4 = 20;
let sum2 = num1 + num2 - num3 - num4
console.log(sum2)

let num5 = 0;
let num6 = 2;
let num7 = 7;
let num8 = 100;
let num9 = 25;
let numm10 = 1;
let avg1 = (num1 + num2 + num3 + num4 + num5)/5
let avg2 = (num6 + num7 + num8 + num9 + numm10)/5
console.log(avg1)
console.log(avg2)

 let avg3 = ( 4 + 10 + 22  - 30 + 55 )/5
 console.log(avg3)
 let avg4 = ( 68 + 7 - 22 + 9 + 100)/5
 console.log(avg4)
let avg5 = (avg3 +avg4)/2
console.log('final average ' + avg5)

let number  = 4;
 
if (number == 1) { //fakse 
    console.log('the number is 1')
console.log('the number is 1')
}
else if (number == 2){
    console.log('false')
}
else if (number ==4) {
    console.log('true')
}
let num = 1;
let newnum = -1;
if (num > 0){
    console.log('positive')
}
else {console.log('negative')}

if (newnum > 0){
    console.log('positive')
}
else {console.log('negative')}

let ageuser1 = 18;
let ageuser2 = 12;
if (ageuser1 >17) {
    console.log('permission granted')
}
else console.log('permission denied')
if (ageuser2 >17) {
    console.log('permission granted')
}
else console.log('permission denied')

let numm = -1;
if (numm > 0){
    if (numm >100) 
    {
        console.log('number is positive and > 100')
    }
    else console.log('number is positive and < 100')}
else console.log('rum is negative')     


let grade = 50;
if (grade >= 90)
{
    console.log('Grade is A')
   
}
else if (grade >=80)
{console.log('Grade is B')}
else if (grade >=70)
{console.log('Grade is C')}
else if (grade >=55)
{console.log('Grade is D')}
else 
{console.log('Grade is F')}


let numb = 1;

switch (numb) {
case 1:
console.log('inside of case1')
break;

case 2: 
console.log('inside of case2')
break;
case 3: 
console.log('inside of case3')
break;
default:
console.log('do something else')
break;
}
// Ternary operator
// let lighting = "dark";
// lighting === "dark" ? "It's dark" : "It's light";
// console.log(lighting);

// Exercise 1

let letter = "A";

switch (letter) {
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log(letter + " is a vowel");
        break;
    default:
        console.log(Letter + " Is not a Vowel");
        break;
}
// Exercise 2 Terenayr Operator

let numberz = 3;

oddEven = numberz % 2 === 0 ? "It's even" : "It's odd";
console.log(oddEven);