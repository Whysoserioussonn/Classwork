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