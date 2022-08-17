/*
1)
Write a program that uses console.log to print all the numbers from 1 to 100
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5(and not 3), print "Buzz" instead.
Whne you have that working, modify your program to print"FizzBuzz", for 
numbers that are divisible by both 3 and 5 (and still print "Fizz" or 
"Buzz" for numbers divisible by only one of those).
*/

// make a loop that goes from 1 to 100
for ( let num = 1; num < 101; num ++ ) 
{
    
  let checkForThree = num % 3;
  let checkForFive = num % 5;
  
    if ( (checkForThree == 0) && (checkForFive == 0) ) 
  	console.log( "FizzBuzz");
  
    else if (checkForThree == 0)
    console.log( "Fizz");
    
    else if (checkForFive == 0)
    console.log( "Buzz");
   
     else
    console.log( num );
}

/*
Bonus Logical Question
Nando went to the vending machine to buy himself a cookie. The cookie costs
$4.00. He paid with a $10 bill, the vending machine paid him back in quarters.
Write a looop tha says how many quarters he got in return.
*/


