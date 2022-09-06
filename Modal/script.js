let showModalBtns = document.querySelectorAll('.modal-open')
let modal = document.querySelector('.modal')
let modalBackdrop = document.querySelector('.modal-backdrop')
let modalExit = document.querySelector('.modal-exit')
let modalBody = document.querySelector('.modal-body')

// need a click event attached to the showModalBtn to view modal
showModalBtns.forEach((btn) => btn.addEventListener("click", showModal))


let templates = {
    rules: {
        header: "Rules of the Game",
        content: "1. Win the game, 2. Don't lose the game"
    },
    settings: {
        header: "Settings for the Game",
        content: "Difficulty. Music. Etc."
    },
    about: {
        header: "About me",
        content: "I like to make games. Woohoo!"
    } 
}


// a function handling the appearance of modal
function showModal(e) {

    // add a class of "show" to the modal that it appears
    modal.classList.add("show")

    // add an event listener to the backdrop
    modalBackdrop.addEventListener("click", closeModal)

    // add an event listener to the 'cancel' button
    modalExit.addEventListener("click", closeModal)

    // access the clicked button's name attribute and assign it to the value 'modalType'
    let modalType = e.target.name

    // use the 'modalType' value to access the correct template for this modal
    let template = templates[modalType]

    // use the 'template' object to change the text content of the header tag
    modalBody.querySelector('h1').textContent = template.header

    // use the 'template' object to change the text content of the paragraph tag
    modalBody.querySelector('p').textContent = template.content
}

function closeModal(e) {

    // remove a class of "show" from the modal so that it disappears
    modal.classList.remove("show")

    // remove an event listener from the backdrop
    modalBackdrop.removeEventListener("click", closeModal)

    // renive an event listener from the 'cancel' button
    modalExit.removeEventListener("click", closeModal)
}