const myLibrary = [] // Created the Empty array for the initial library //

const addBook = document.querySelector("#new-book"); 


// Project Methods / Functions that allow for overall functionality //

function Book(title, author, pages, read) {  // The intial book object constructor // 
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

function addBookToLibrary(title, author, pages,read) { // function to create a new book object that is then added to the library array through the .push method //
    const newBook = new Book(title, author, pages, read )
    myLibrary.push(newBook)
}

Book.prototype.ToggleRead = function() { // A simple prototypal method that allows for the 'read' variable to be toggled -> quite literally means ' reverse status ' //
  this.read = !this.read;
}

addBookToLibrary("The Brothers Karamazov", "Dostoyevskey", "800", true) // List of starter books to test functionality // 
addBookToLibrary("1984", "George Orwell", "250", false)


 function renderLibrary() {  // Creates the initial render function that is one of the backbones of this entire project //
  const contentBar = document.getElementById("content-bar"); // DOM Manipulation - Selects the content portion of the HTML to later input the library books //
 contentBar.textContent = ``;

 function removeBook(id) {  // creates the function for removing a book from the myLibrary array using its unique ID & the .splice method -> then re-rendering the library //

  const index = myLibrary.findIndex(book => book.id === id);

  if (index !== -1) {

    myLibrary.splice(index, 1);

  }

  renderLibrary();

}

// DOM Manipaltion that creates the myLibrary array on the page with the functionality from the above methods //

myLibrary.forEach((book) => { // .forEach loop that goes through the array objects individually and creates all of the card elements and appends them to the html // 

  // Adds div shell to HTML //

  const bookElement = document.createElement(`div`);
  bookElement.classList.add('book-info'); 

  // Adds book title //

  const bookTitle = document.createElement(`h1`);
  bookTitle.textContent = `${book.title}`;
  bookElement.appendChild(bookTitle)
  // Adds book Author //

  const bookAuthor = document.createElement(`p`);
  bookAuthor.textContent = `${book.author}`;
  bookElement.appendChild(bookAuthor)

  // Adds book pages //

  const bookPages = document.createElement(`p`);
  bookPages.textContent = `${book.pages} Pages`;
  bookElement.appendChild(bookPages)

  // Adds read indicator //

  const bookRead = document.createElement(`p`);
  bookRead.textContent = book.read ? "Read" : "Unfinished"; // This simple logic alows for the read textcontent to be changed depending on the boolean value selected //
  bookElement.appendChild(bookRead);

  // Adds Toggle Read Button //

  const bookToggleRead = document.createElement(`button`) // These buttons were styled using DOM manipulation //
  bookToggleRead.textContent = `Toggle Status`
  bookToggleRead.style.width = `fit-content`
  bookToggleRead.style.justifySelf = `center`
  bookToggleRead.style.padding = `5px`
  bookToggleRead.style.fontFamily = `Rubik`
  bookToggleRead.style.fontWeight = `600`
  bookToggleRead.style.borderRadius = `5px`
  bookToggleRead.style.color = `rgb(34, 33, 33)`
  bookToggleRead.style.cursor = `pointer`
  bookToggleRead.dataset.id = book.id // Links the books specific ID to its relevant button // 
  bookToggleRead.addEventListener("click", () => {

    book.ToggleRead(); // Calls the previously defined ToggleRead() function //
  
    renderLibrary(); // re-renders Library to allow for updated read status //
  
  });

  bookElement.appendChild(bookToggleRead)

  // Adding close button //
  const bookDelete = document.createElement(`button`)
  bookDelete.textContent = `Remove`
  bookDelete.style.width = `fit-content`
  bookDelete.style.justifySelf = `center`
  bookDelete.style.padding = `5px`
  bookDelete.style.fontFamily = `Rubik`
  bookDelete.style.fontWeight = `600`
  bookDelete.style.color = `white`
  bookDelete.style.borderRadius = `5px`
  bookDelete.style.backgroundColor = `rgb(34, 33, 33)`
  bookDelete.style.cursor = `pointer`
  bookDelete.dataset.id = book.id;
  bookDelete.addEventListener("click", () => {

    removeBook(book.id); 
  
  });

  bookElement.appendChild(bookDelete)
  
 

  bookElement.style.textAlign = `center`
  bookElement.style.color = '--medium-purple'

  contentBar.appendChild(bookElement)

  
  
})}

renderLibrary()


// DOM Manipulation to select the 'Modal' 
const openButton = document.getElementById("new-book")
const closeButton = document.getElementById("close-modal")
const formModal = document.getElementById("new-book-modal")

// DOM Manipulation to allow the Modal pop-up to become visible
openButton.addEventListener("click", () => {
  formModal.classList.add("open");
})

// DOM Manipulation to allow the Modal pop-up to become invisible
closeButton.addEventListener("click", () => {
  formModal.classList.remove("open");
  form.reset()
})

// DOM Manipulation to select the form 
const form = document.querySelector(".modal-inner");

// Extracts form data and appends to Library & page 
form.addEventListener("submit", (e) => { // Upon clicking the 'select button' 
  e.preventDefault(); // Prevents page refresh
  const data = new FormData(e.target); // Grabs the form data from the form 
  const entries = Object.fromEntries(data.entries()); // Takes the data and turns it into an Object
  addBookToLibrary(entries.title, entries.author, entries.pages, entries.read); // Takes the Object items and passes them into the 'addBooktoLibrary' function
  renderLibrary() // Renders the Library with the newly added book
  form.reset()
});


const submitButton = document.getElementById("submit")
const formReset = document.getElementById("form").reset();  //  This resets the form upon exiting the form from the 'close' button //


 submitButton.addEventListener("click", () => {
  formModal.classList.remove("open"); // This exits the modal upon form submission //
  

 })