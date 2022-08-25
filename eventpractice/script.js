// first select the element we want and store it in a variable (btn)
const btn = document.querySelector("button")

// then attach an event listener to that element
btn.addEventListener("click", function(event) {

    // evt is a special parameter representing the event object
    // the event object has all the info you'll ever need about
    // the event that occured and the element that caused it
    // console.log(event.target) 
    // console.log(this)

    // btn, event.target, and this all represent the same thing:
    // button element

    // create a brand new li tag (in memory) and store it in
    // a constant called "li"
    const li = document.createElement('li')
    console.log(li)

    // select the input element and store it in a variable (input)
    const input = document.querySelector('input')
    console.dir(input)

    // for input elements we'll need to access the "value" property for any text inside it
    console.log(input.value)

    // we target the textContent property of the li tag
    // and we assign it the value of our input 
    li.textContent = input.value

    // const ul = document.querySelector('ul')
    // ul.appendChild(li)

    // we first select the ul tag, and then we add (append)
    // the new li tag, which has our new comment, to the
    // selected ul 

    document.querySelector('ul').appendChild(li)

    input.value = ""

    event.target.style.color = 'red';
})

// select the ul tag
const ul = document.querySelector("ul")

// add an event listener to our selected ul
ul.addEventListener("click", handleClick)

function handleClick(event) {
//     console.log('clicked on ul...')
//     console.log(event)
//     console.log(event.target)
//     // event.target.style.color = 'blue'
// console.log(event.target)

    console.log('clicked on...', event.target.tagName)

    if (event.target.tagName === "LI") {
        event.target.style.color = "white"
    }

    if (event.target.tagName === "UL") {
        event.target.style.backgroundColor = "black"
    }
}