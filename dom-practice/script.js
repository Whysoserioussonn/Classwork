// document (to access the DOM)
​
​
// document object has methods we can use to traverse the DOM
// one method is called getElementById
​
let h1Tag = document.getElementById("title")
​
// h1Tag is an element modeled as an object
// it has a BUNCH of properties we can access
// with dot notation
​
// select an element by its tag name (p)
let pTag = document.querySelector("p")
​
// select an element by its class name ("main-title")
// let pTag = document.querySelector(".main-title")
​
// select an element by its id name ("title")
// let pTag = document.querySelector("#title")
​
// gives us everything inside the tag, including HTML tags
console.log(pTag.innerHTML)
​
// gives us only the text inside the tag
console.log(pTag.textContent)
​
​
// console.log(pTag.innerText)
​
// console.log(h1Tag.innerText)
​
console.dir(pTag)
​
h1Tag.style.textAlign
​
​
/*
​
REVIEW:
​
There is a special document keyword (represents the DOM)
​
We can use methods to select specific elements:
    - getElementById
    - querySelector
    - setAttribute
​
Access the text and innerHTML of an element with:
    - textContent
    - innerHTML
​
The style property (object) can be used to make changes in CSS
    - style
​
It has a bunch of properties that represent CSS Properties for that element
    - color
    - backgroundColor
    - textAlign
​
*/
​
​
​
// pTag.setAttribute("class", "my-special-class-name")
​
console.log(pTag.classList)
​
console.log(pTag.classList.contains("my-second-class"))
pTag.classList.toggle("my-second-class")
​
​
// selecting multiple elements by tag name
let liTags = document.getElementsByTagName("li")
​
console.log("byTagName method: ", liTags)
​
// selecting multiple elements by className
let liTags2 = document.getElementsByClassName("comment")
​
console.log("byClassName method: ", liTags2)
​
console.log(liTags2[0])
​
// selecting multiple elements by whatever you like
let liTags3 = document.querySelectorAll(".comment")
​
console.log(liTags3)
​
​
// we can iterate over our array of elements 
// (HTMLCollection or NodeList)
​
console.log('looping with for of...')
// with a for of loop...
for (let li of liTags3) {
    console.log(li)
}
​
console.log('looping with for loop...')
// with a regular for loop...
for (let i = 0; i < liTags3.length; i++) {
    console.log(liTags3[i])
}
​
console.log('looping with forEach...')
// with a forEach array method
liTags3.forEach((element) => console.log(element))