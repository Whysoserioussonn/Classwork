let learners =[24, 'Jade', true,[3,4,1]]

// to change a value , we access by index
learners[0] =4

console.log(learners)
console.log(learners[2])
console.log(learners[3][0])


//PUSH method will add 4 to end of the array

learners.push('4')

console.log(learners)

// POP method removes last index value in array

learners.pop()
console.log(learners)

//SHIFT methond removes a value from the beginning of an aray

learners.shift()
console.log(learners)

// UNSHIFT method adds a value to the begining of an array

learners.unshift('Usman')
console.log(learners)

learners.shift()   // remvoes 1st index value
console.log(learners)


let learner  = ['Krisy','Nathan','Ron']
let learner2 = ['Jade','Rixio','Goofy']

// spread parameters , start off with ... and then the name of the array,
// this combines both arrays
let everybody = [...learner, ...learner2]

console.log(everybody)
// rest parameters , allows you to spread the content 
// add is the name of function, numbers is the....
function  add(...numbers)
 {    // [2,3,4,56,77]
    for(let i=0;i<numbers.length;i++)
    {
        // we are using i to access the index in the for loop
        console.log(numbers[i])
    }


}
add(2,3,4,56,77)

//LAB for FUNCTIONS and ARRAYS

/*
1)Define a function, as a function declaration, maxOfTwoNumbers that takes two
 numbers as arguments and returns the largest of them.
If they are the SVGMaskElement, return that number. Use if else construct
or a ternary expression- the Math.max method is allowed
*/

function maxOfTwoNumbers(a, b){
    if (a>b){
      return a;
    }else if (a==b){
      return a;
    }else{
      return b;
    };
  };
  console.log(maxOfTwoNumbers(2,3));
  console.log(maxOfTwoNumbers(7,7));
  console.log(maxOfTwoNumbers(100,9));

  /*
  2) Define a function, as a function expression, maxofThree that takes three
  numbers as arguments and returns the largest of them. Again, the Math.max 
  is not allowed
  */
  function maxOfThreeNumbers(a, b,c)
  {
    if (a>b && a>c){
      return a;
    }else if (b>a && b>c){
      return b;
    }else{
      return c;
    };
  }
  console.log(maxOfThreeNumbers(2,3,4));
  console.log(maxOfThreeNumbers(8,3,4));
  console.log(maxOfThreeNumbers(2,9,4));

  /*
  3) Define a function as a function declaration, isCharAVowel that
  takes a character as an argument and returns true if it is a vowel,
  false otherwise.
  */
  function isCharAVowel(char)
{
 if (char == 'a' )
 return true;
 else if (char == 'e' )
 return false;
  else if (char == 'i' )
 return false;
  else if (char == 'o' )
 return false;
  else if (char == 'u' )
 return false;
 else return false      
}
console.log(isCharAVowel('a'));
console.log(isCharAVowel('z'));
console.log(isCharAVowel('m'));

/* 
4) Define a fucntion as a function expression, sumArray that takes an array
of numbers and returns the sum of those numbers. 
For Example, sumArray([2,4,5]); would return 11.
*/
const arr = [2, 4, 5];

const sumArray = arr.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);

console.log(sumArray);
