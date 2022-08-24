const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const panagram = ['The', 'quick','brown', 'fox', 'jumps', 'over','the','lazy','dog']
// array methods gake a callback function as an argument
// callbacks are functions that will run at a later time

//evey method
let test =nums.every(myCallback) // -> returns either true or fall

function myCallback(element)
{
    if(element >=0)
    {
        return true;
    }
    else{
        return false;
    }
    // returns elements >0

}
console.log('the result of our every array method check is... ' +test)
// MDN Docs example of a callback
//const isBelowThreshold = (currentValue) => currentValue < 40;
// same thing as
//function isBelowThreshold(currentValue)
//{ return currentValue <40}

let test2= panagram.every(myNewCallback)
//a version with less snytax for test2 
//let test2 = panagram.every((element)) => element.length < 9
function myNewCallback(element)
{
    if(element.length < 8)
    {
        return true
    }
    else 
    {
        return false
    }
}

console.log(' the result of our second test is ...' +test2)

let test3 = nums.filter(element => element < 4);
console.log('the result of our third test is ...' + test3)

let test4 = panagram.filter(word => word.length%2 ==0)
console.log(test4)

let test5 = nums.find(element => element%5 ==0)
console.log(test5)

let test6 = panagram.find(element => element.length >5)
console.log('The result for test 6 is ...' + test6)

let test7 = nums.findIndex(element => element%3 ==0)
console.log('The result for test 7 is ...' + test7)

let test8 = panagram.findIndex(element => element.length <2)
console.log('The result for test 8 is ...' + test8)

 nums.forEach(element => console.log(element*= 3))
//console.log('The result for test 9 is ...' + test9)

panagram.forEach(element => console.log(element +"!" ))
//console.log('The result for test 10 is ...' + test10)

// pass a function to map
const map1 = nums.map(x => x * 100);

console.log('The result for test 11 is ...' + map1);

const map2 = panagram.map(x => x.toUpperCase());
console.log('The result for test 12 is ...' + map2);

// checks whether at least one element in the array passes the test
const seven = (element) => element % 7 === 0;

console.log('The result for test 13 is ...' + nums.some(seven));

//const seven = (element) => element % 7 === 0;

//console.log('The result for test 13 is ...' + nums.some(seven));

const someA = panagram.some(word => word.toLowerCase())
console.log(someA)