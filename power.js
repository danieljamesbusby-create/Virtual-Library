const myLibrary = [] // Created the Empty array for the initial library //

const addBook = document.querySelector("#new-book");

function Book(title, author, pages, read) {  // The intial book object constructor // 
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

function addBookToLibrary(title, author, pages,read) { // function to create a new book object that is then added to the library array //
    const newBook = new Book(title, author, pages, read )
    myLibrary.push(newBook)
}

addBookToLibrary("The Brothers Karamazov", "Dostoyevskey", "800", true) // List of starter books to test functionality // 
addBookToLibrary("1984", "George Orwell", "250", false)
addBookToLibrary("1984", "George Orwell", "250", false)
addBookToLibrary("1984", "George Orwell", "250", false)
addBookToLibrary("1984", "George Orwell", "250", false)
addBookToLibrary("1984", "George Orwell", "250", false)

 function renderLibrary() {
  const contentBar = document.getElementById("content-bar"); // DOM Manipulation - Selects the content portion of the HTML to later input the library books //
 contentBar.textContent = ``;

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
  bookRead.textContent = `${book.read}`;
  bookElement.appendChild(bookRead);

  bookElement.style.textAlign = `center`
  bookElement.style.color = '--medium-purple'

  contentBar.appendChild(bookElement)
})}

renderLibrary()

const openButton = document.getElementById("new-book")
const closeButton = document.getElementById("close-modal")
const formModal = document.getElementById("new-book-modal")


openButton.addEventListener("click", () => {
  formModal.classList.add("open");
})

closeButton.addEventListener("click", () => {
  formModal.classList.remove("open");
})