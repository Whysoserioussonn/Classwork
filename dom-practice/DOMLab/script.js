var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

  // 1.0 select and cache the <main>element
  const mainEl = document.querySelector('main');
  console.log(mainEl)

 // 1.1 Set the background color of mainElto the value stored in 
 // the --main-bgCSS custom property.

 mainEl.style.backgroundColor = 'var(--main-bg)';

 // 1.2 Set the content of mainElto <h1>SEI Rocks!</h1>.

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

// 1.3 Add a class of flex-ctr to mainEl.
// Hint: Element.classList API

mainEl.classList = 'flex-ctr';
// Progress check, output should be SEI ROCKS!
// yes its working!

// Task 2.0
// Select and cache the <nav id="top-menu">element in a variable named topMenuEl.

const topMenuEl = document.getElementById('top-menu');
console.log(topMenuEl)

// Task 2.1
// Set the height topMenuElelement to be 100%.

topMenuEl.style.height = "100%";

// Task 2.2
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Task 2.3
// Add a class of flex-around to topMenuEl.

topMenuEl.classList = 'flex-around';

// Task 3.0 Copy the following data structure to the top of script.js:

// Menu data structure
// var menuLinks =     [
//   {text: 'about', href: '/about'},
//   {text: 'catalog', href: '/catalog'},
//   {text: 'orders', href: '/orders'},
//   {text: 'account', href: '/account'},
// ];
// data structure is a the top

// Task 3.1  Iterate over the entire menuLinksarray and for each "link" object:
for ( let i= 0; i < menuLinks.length; i++)
 {
// Create an <a>element.
  let link = document.createElement("a");
  // On the new element, add an href attribute with its value set to the hrefproperty of the "link" object.
  link.href = menuLinks[i].href
// Set the new element's content to the value of the textproperty of the "link" object.
link.innerText = menuLinks[i].text
// Append the new element to the topMenuEl element.
  topMenuEl.append(link);
 
}

