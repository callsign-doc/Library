const myLibrary = [];

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



// RESPONSIVE SECTION--------------------------------
const bookLibrary = document.querySelector('.bookLibrary');
const bookDisplayContainer = document.querySelector('.selectedBookContainer');
let selectedBook;

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
  readStatus.textContent = book.readStatus;

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
  bookToRemove.remove();

  createBookElement(book, index, bookDisplayContainer);
};


bookLibrary.addEventListener('click', (e) => {
  const target = e.target;
  // const parentElement = target.parentNode;
  const selectedBookElement = target.closest('.book');

  // bookElement.style.backgroundColor = 'salmon';
  const dataIndex = selectedBookElement.dataset.index;
  selectedBook = myLibrary[dataIndex];

  // let imgSrc = myLibrary[dataIndex].cover;
  // let bookTitle = selectedBookElement.querySelector('#title').textContent;
  // let bookAuthor = selectedBookElement.querySelector('#author').textContent;
  // let bookPages = selectedBookElement.querySelector('.pages').textContent;
  // let bookReadStatus = selectedBookElement.querySelector('#readStatus').textContent;

  // console.log(`index: ${dataIndex}, imgCover: ${imgSrc}, bookTitle: ${bookTitle}, bookAuthor: ${bookAuthor}, bookPages: ${bookPages}, bookReadStatus: ${bookReadStatus}`);

  // console.log(`book was clicked yo!. Target: ${target}, parent element: ${parentElement}`);
  updateSelectedBookDisplay(selectedBook, 69);
  console.log(`Selected book element: ${selectedBook.title}`);
});






function addToLibrary(title, author, pages, cover, readStatus) {
  let book = new Book(title, author, pages, cover, readStatus);
  myLibrary.push(book);
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


addToLibrary('JJK', 'Gege', '69', 'jjkCover', 'true');
addToLibrary('Vagabond 69', 'Takehiko Inoue', '420', 'vagabond', 'true');
addToLibrary('Tokyo Ghoul', 'Sui Ishida', '12', 'tokyoGhoul', 'true');
addToLibrary('JJK', 'Gege', '69', 'jjkCover', 'true');
addToLibrary('Vagabond 69', 'Takehiko Inoue', '420', 'vagabond', 'true');
addToLibrary('Tokyo Ghoul', 'Sui Ishida', '12', 'tokyoGhoul', 'true');


displayBooks(myLibrary);
console.log(myLibrary);

