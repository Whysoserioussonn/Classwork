// Task 5.0  Update the menuLinksarray in script.js to this:
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
/*
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
*/

  // Task 1.0
  // select and cache the <main>element
  const mainEl = document.querySelector('main');
  console.log(mainEl)

 /* Task 1.1
  Set the background color of mainElto the value stored in 
  the '--main-bgCSS' custom property.
 */
 mainEl.style.backgroundColor = 'var(--main-bg)';

 // Task 1.2
 // Set the content of mainEl to <h1>SEI Rocks!</h1>.

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

/* Task 1.3
Add a class of flex-ctr to mainEl.
Hint: Element.classList API
*/
mainEl.classList = 'flex-ctr';

/*  PROGRESS CHECK, 
output should be SEI ROCKS!  yes its working!
*/

/* Task 2.0 
Select and cache the <nav id="top-menu">element in a variable
named topMenuEl.
*/
const topMenuEl = document.getElementById('top-menu');
console.log(topMenuEl)

/* Task 2.1
Set the height topMenuElelement to be 100%.
*/
topMenuEl.style.height = "100%";

/* Task 2.2
Set the background color of 'topMenuEl' to the value stored in
the '--top-menu-bg' CSS custom property.
*/
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

/* Task 2.3
Add a class of flex-around to topMenuEl.
*/
topMenuEl.classList = 'flex-around';

/* Task 3.0 
Copy the following data structure to the top of script.js:
Data structure for menuLinks is at the top
*/

/* Task 3.1a 
Iterate over the entire menuLinksarray and for each "link" object:
*/
for ( let i= 0; i < menuLinks.length; i++)
 {
// Task 3.1b Create an <a> element.
  let link = document.createElement("a");
// Task 3.1c On the new element, add an href attribute with its value set to 
// the hrefproperty of the "link" object.
  link.href = menuLinks[i].href
// Task 3.1d Set the new element's content to the value of the textproperty of 
// the "link" object.
link.innerText = menuLinks[i].text
//Task 3.1e Append the new element to the topMenuEl element.
  topMenuEl.append(link);
 
}

/* Task 4.0
 Select and cache the <nav id="sub-menu">element in a variable
 named subMenuEl.
*/
 const subMenuEl = document.getElementById("sub-menu");

/* Task 4.1
 Set the height subMenuElelement to be 100%.
*/
 subMenuEl.style.height = "100%";

/* Task 4.2
 Set the background color of subMenuElto the value stored in 
 the --sub-menu-bgCSS custom property.
*/
 subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

/* Task 4.3
 Add the class of flex-around to the subMenuElelement.
*/ 
 subMenuEl.classList = 'flex-around';
/* Could also complete 4.3 with the following using .setAttribute instead of .classList
 subMenuEl.setAttribute("class", "flex-around");
*/

/* Task 4.4
 Set the CSS position property of subMenuEl to the value of absolute.
*/
 subMenuEl.style.position = "absolute";

/* Task 4.5
 Set the CSS top property of subMenuEl to the value of 0.
*/
 subMenuEl.style.top = "0";

/* Task 5.0
 Update the menuLinksarray in script.js . UPDATE AT TOP OF FILE
*/

/* Task 5.1
1. Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks.
2. Declare a global showingSubMenu variable and initialize it to false;
*/
const topMenuLinks = topMenuEl.querySelectorAll("a");
let showingSubMenu = false;


/* Task 5.2
1. Attach a delegated 'click' event listener to topMenuEl.
2. The first line of code of the event listener function should call the event object's preventDefault()method.
3. The second line of code function should immediately return if the element clicked was not an <a>element.
4. console.log the content of the <a> to verify the handler is working.
*/
topMenuEl.addEventListener("click", (event) =>
 {
  event.preventDefault();
  if (event.target.tagName !== "A")
   {
    return;
   }
  console.log(event.target.textContent);
  
  /* Task 5.3 
  Next in the event listener, if the clicked '<a>' link has a class of active:
  1. Remove the 'active' class from the clicked <a> element.
  2. Set the 'showingSubMenu' to 'false'.
  3. Set the CSS top property of 'subMenuEl' to '0'.
  4. 'return' to the exit handler.
  */

  if (event.target.classList.contains("active"))
   {
    event.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
   }

  /* Task 5.4
  Next, the event listener should remove a class name of active from
  each <a>a element in topMenuLinks - whether the active class 
  exists or not.
  Hint: Removing a non-existent class from an element does not cause
  an error, so just remove it!
  */
  
  for (let i = 0; i < topMenuLinks.length; i++) 
  {
    topMenuLinks[i].classList.remove("active");
  }

  /* Task 5.5
  Next, the event listener should add a class name of 'active' to the
  '<a>' element that was clicked.
  */
  event.target.classList.add("active");

  /* Task 5.6
  1. Set 'showingSubMenu to 'true' if the clicked '<a>' element's "link"
  object within 'menuLinks' has a 'subLinks' property(all do, except
  for the "link" object for ABOUT), otherwise, set it to 'false'.
  2. Hint: Saving the "link" object in a variable will come in handy
  for passing its subLinks array in Task 5.7
    */
  const eventClicked = event.target.textContent;

  const menuLink = menuLinks.find((link) => 
  {
      return link.text == eventClicked; 
  });

  if (menuLink == undefined)
   {
    return;
   }

  if (menuLink.subLinks)
   {
    showingSubMenu = true;
   }
  else
   {
    showingSubMenu = false;
   }

  // PROGRESS CHECK, clicking any of the links should make the link
  // active and clear the others. clicking an active link should clear tha link.

   /* Task 5.8
  Code the buildSubMenu function so that it:
  1. Clears the conntents of subMenuEl.
  2. Iterates over the subLinks array passed an argument;
  and for each "link" object:
  : Create an element
  : On the new element, add an href attribute with its value
  set to the href property of the "link" object.
  : Append the new element to the subMenuE1 element.
  */


  const buildSubMenu = (sublinks) =>
   {
    subMenuEl.innerHTML = "";
    for (let i = 0; i < sublinks.length; i++) 
    {
      const newAnchor = document.createElement("a");
      newAnchor.setAttribute("href", sublinks[i].href);
      newAnchor.textContent = sublinks[i].text;
      subMenuEl.append(newAnchor);
    }
  };

/* Task 5.7 
   Next in the event listener..
   If showingSubMenu is true:
   1. Call a buildSubMenu function passing to it the subLinks array for the 
   clicked <a> element. 
   2. Set the CSS top property of subMenuEl to 100%
  Otherwise,(showingSubMenu is false)
   3. Set the CSS top property of subMenuEl to 0. 
  */
  if (showingSubMenu)
   {
    buildSubMenu(menuLink.subLinks);
    subMenuEl.style.top = "100%";
  }
  else {
    subMenuEl.style.top = "0";
  }

   /* PROGRESS CHECK , take the menu for a test drive.  Sub menu should appear
    when top menu elements are clicked.
  */

  /* Task 6.4
  1. If the ABOUT link is clicked, an '<h1>about</h1>' should be
   displayed. Our initial 
  */
  if (eventClicked == "about") 
  {
    mainEl.innerHTML = "<h1>about</h1>";
  }

});


/* Task 6.0
1.  Attach a delegated 'click' event listener to 'subMenuEl'
2. The first line of code of the event listener should call the event
object's 'preventDefault() method.
3. The second line of code function should return immediately if the
element clicked was not an '<a>' element
4. 'console.log' the content of the '<a>' to verify the handler is 
working.
*/

subMenuEl.addEventListener("click", (event) =>
 {
  event.preventDefault();
  if (event.target.tagName !== "A")
   {
    return;
   }
  console.log(event.target.textContent);

  /* Task 6.1
  Next, the event lister should:
  1. Set the 'showingSubMenu' to 'false'.
  2. Set the CSS 'top' property of 'subMenuEl' to '0'.
    */

  showingSubMenu = false;
  subMenuEl.style.top = "0";

  /* Task 6.2
  Remove the class name of 'active' from each '<a>' element,
  withing an '<h1>', clicked within 'subMenuEl'.
  */

  for (let i = 0; i < topMenuLinks.length; i++)
   {
    topMenuLinks[i].classList.remove("active");
  }

  /* task 6.3
  1. Update the contents of 'mainEl' to the contents of '<a>'
  element, within an '<h1>', clicked within 'subMenuEl'.
  */
  mainEl.innerHTML = `<h1>${eventClicked}</h1>`;

});