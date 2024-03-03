const myLibrary = [];
let selectedBook;
let selectedBookIndex;


function Book(title, author, pages, cover, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.cover = cover;
  this.readStatus = typeof readStatus === 'boolean' ? readStatus : false;

  this.getInfo = function() {
    return `${this.title} by ${this.author}. ${this.pages} short. Read: ${this.readStatus}`;
  }
}

class Book2 {
  constructor(title, author, pages, cover, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.cover = cover;
    this.readStatus = typeof readStatus === 'boolean' ? readStatus : false;
  }

  getInfo = () => {
    return `${this.title} by ${this.author}. ${this.pages} short. Read: ${this.readStatus}`;
  }
}

function addToLibrary(title, author, pages, cover, readStatus) {
  let book = new Book(title, author, pages, cover, readStatus);
  myLibrary.push(book);
}

function clearBookLibrary() {
  while (bookLibrary.firstChild) {
      bookLibrary.removeChild(bookLibrary.firstChild);
  }
}



// RESPONSIVE SECTION--------------------------------
const bookLibrary = document.querySelector('.bookLibrary');
const bookDisplayContainer = document.querySelector('.selectedBookContainer');
const addBookDialogBox = document.querySelector('#dialogOverlay');
const addBookForm = document.querySelector('#addBookForm');

const removeBookBtn = document.getElementById('removeBookBtn');
const addBookBtn = document.querySelector('#addBookBtn');
const closeDialogBoxBtn = document.querySelector('.close-button');
const markAsReadBtn = document.querySelector('#readStatusBtn');






function createBookElement(book, index, destination) {
  // Create the main book container
  const bookElement = document.createElement('div');
  bookElement.classList.add('book');
  bookElement.setAttribute('data-index', index);


  // Create the bookImgContainer element
  const bookImgContainer = document.createElement('div');
  bookImgContainer.classList.add('bookImgContainer');

  // Create the img element
  const img = document.createElement('img');
  img.id = 'bookImg';
  img.src = 'assets/' + book.cover + '.jpeg';
  img.alt = '';

  // Append the img element to the bookImgContainer
  bookImgContainer.appendChild(img);

  // Create the bookInfo container
  const bookInfo = document.createElement('div');
  bookInfo.classList.add('bookInfo');

  // Create the title element
  const title = document.createElement('div');
  title.classList.add('boldText');
  title.id = 'title';
  title.textContent = book.title;

  // Create the author element
  const author = document.createElement('div');
  author.id = 'author';
  author.textContent = book.author;

  // Create the pages element
  const pages = document.createElement('div');
  pages.classList.add('pages');
  pages.textContent = book.pages;

  // Create the readStatus element
  const readStatus = document.createElement('div');
  readStatus.id = 'readStatus';
  readStatus.textContent = book.readStatus ? 'Book Read' : 'Book Unread';

  // Append title, author, pages, and readStatus to bookInfo
  bookInfo.appendChild(title);
  bookInfo.appendChild(author);
  bookInfo.appendChild(pages);
  bookInfo.appendChild(readStatus);

  // Append bookImgContainer and bookInfo to the book
  bookElement.appendChild(bookImgContainer);
  bookElement.appendChild(bookInfo);

  destination.append(bookElement);

  // let bookItem = new Book(title, authorText, pagesText, imageCover, readStatusText);
  // myLibrary.push(bookItem);
  
  return bookElement;
}

function updateSelectedBookDisplay(book, index) {
  const bookToRemove = document.querySelector('.bookDisplay .book');
  const markAsReadBtn = document.querySelector('#readStatusBtn');

  if (book.readStatus === false) {
    markAsReadBtn.textContent = 'Mark Read';
  } else {
    markAsReadBtn.textContent = "Mark Unread";
  }

  bookToRemove.remove();

  createBookElement(book, index, bookDisplayContainer);
};


// Event listener
bookLibrary.addEventListener('click', handleBookLibraryClick);

// Function to handle book click
function handleBookLibraryClick(e) {
  const target = e.target;
  const selectedBookElement = target.closest('.book');

  if (selectedBookElement) {
    const dataIndex = selectedBookElement.dataset.index;
    selectedBook = myLibrary[dataIndex];
    selectedBookIndex = dataIndex;

    updateSelectedBookDisplay(selectedBook, dataIndex);
    console.log(`Selected book element: ${selectedBook.title}, index: ${dataIndex}`);
  }
}


function displayBooks(array) {
  let index = 0;

  array.forEach(function(item) {
    // console.log(item);
    let book = item;

    createBookElement(book, index, bookLibrary);
    index += 1;
  });
}


// Add new book form 
addBookForm.addEventListener('submit', (event) => {
  // event.preventDefault();
  let bookForm = event.target.closest('#addBookForm');
  let readStatus = document.getElementById('readStatusReadForm');


  let title = bookForm.querySelector('.inputTitleForm').value;
  let author = bookForm.querySelector('.inputAuthorForm').value;
  let pages = bookForm.querySelector('.inputPagesForm').value;
  let cover = 'catCover';
  let isReadStatusSelected = readStatus.checked;

  console.log('somethign was submitted yo');
  console.log(`title: ${title}, author: ${author}, pages: ${pages}, cover: ${cover}`);

  addToLibrary(title, author, pages, cover, isReadStatusSelected);
  clearBookLibrary();
  displayBooks(myLibrary);

  bookForm.reset();
  readStatus.checked = true;
})


// BTNS
removeBookBtn.addEventListener('click', removeBook)

addBookBtn.addEventListener('click', () => {
  addBookDialogBox.showModal();
  console.log('my name jeff');
});
closeDialogBoxBtn.addEventListener('click', ()=> {
  addBookDialogBox.close();
})

markAsReadBtn.addEventListener('click', (event) => {
  // const selectedBook = document.querySelector('.bookDisplay .book');  

  // selectedBook.readStatus = !selectedBook.readStatus;
  selectedBook.readStatus = !selectedBook.readStatus;
  updateSelectedBookDisplay(selectedBook, selectedBookIndex);

  clearBookLibrary();
  displayBooks(myLibrary);
});

function removeBook() {
  myLibrary.splice(selectedBookIndex, 1);
  clearBookLibrary();
  displayBooks(myLibrary);
}




//STARTER BOOKS
addToLibrary('JJK', 'Gege', '69', 'jjkCover', true);
addToLibrary('Vagabond 69', 'Takehiko Inoue', '420', 'vagabond', false);
addToLibrary('Tokyo Ghoul', 'Sui Ishida', '12', 'tokyoGhoul', true);
addToLibrary('JJK', 'Gege', '69', 'jjkCover', true);
addToLibrary('Vagabond 69', 'Takehiko Inoue', '420', 'vagabond', true);
addToLibrary('Tokyo Ghoul', 'Sui Ishida', '12', 'tokyoGhoul', true);



displayBooks(myLibrary);
console.log(myLibrary);

