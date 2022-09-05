let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
    
    // Do all of your work inside the document.addEventListener  
  
    // Part 1
  let main = document.querySelector("#main-title")
  main.innerText = " whats up im don"
  
    // Part 2
   let body =document.querySelector("body");
   body.style.backgroundColor = "yellow";
  
    // Part 3
  const e = document.querySelector("li:last-child");
  console.log(e);
  e.remove();
  
    // Part 4
    const specials = document.querySelectorAll(".special-title");
    for(let i of specials){
    i.style.fontSize =  "2rem"}
  
    // Part 5
  const races = document.querySelector("#past-races").getElementsByTagName("li")
  races[3].remove();
    // Part 6
  let pastR = document.createElement("li")
  pastR.innerText = "New York"
  document.querySelector("#past-races").appendChild(pastR)
  
    // Part 7
  let y = document.createElement("div");
  y.setAttribute("class","blog-post");
  y.innerHTML = "<h1> New York </h1> <p> Im going to the BIG APPLE </p>" 
  document.querySelector(".main").appendChild(y)
    // Part 8
  document.querySelector("#quote-title").addEventListener("click", randomQuote)
  
    // Part 9
  
  const blogs = document.querySelectorAll(".blog-post")
  for(let i of blogs)
  {
    i.addEventListener("mouseout", function()
    {
        i.classList.add("purple")
        i.classList.remove("red")
    })
      

    i.addEventListener("mouseover", function()
    {
        i.classList.add("red")
        i.classList.remove("purple")
  
    })
  }
})