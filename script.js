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

function addToLibrary(book) {
  myLibrary.push(book);
}

// function displayBooks(array) {
  
// }

const myLibrary = [];

let jjk = new Book('JJK', 'Gege', '69', true);
let lotr = new Book('Lord of the Rings', 'JRR Tolkien', '570', false);
// console.log(jjk.getInfo());

// addToLibrary(jjk);
// addToLibrary(lotr);
console.log(myLibrary);







// RESPONSIVE SECTION--------------------------------
const bookLibrary = document.querySelector('.bookLibrary');

bookLibrary.addEventListener('mouseover', (e) => {
  const target = e.target;

  if (target.className === 'book') {
    target.style.backgroundColor = 'lightgreen';
  }
});
bookLibrary.addEventListener('mouseout', (e) => {
  const target = e.target;

  if (target.className === 'book') {
    target.style.backgroundColor = 'white';
  }
});


function createBook() {
  const book = document.createElement('div');
  book.classList.add('book');

  // Create the bookImgContainer element
  const bookImgContainer = document.createElement('div');
  bookImgContainer.classList.add('bookImgContainer');

  // Create the img element
  const img = document.createElement('img');
  img.id = 'bookImg';
  img.src = 'assets/jjkCover.jpeg';
  img.alt = '';

  // Append the img element to the bookImgContainer
  bookImgContainer.appendChild(img);
  book.append(bookImgContainer);

  const bookInfo = document.createElement('div');
  bookInfo.classList.add('bookInfo');

  const title = document.createElement('div');
  title.classList.add('boldText');
  title.id = 'title';
  title.textContent = 'Dummy book';

  const author = document.createElement('div');
  author.id = 'author';

  const pages = document.createElement('div');
  pages.classList.add('pages');

  const read = document.createElement('div');
  read.id = 'readStatus';

  // Append title, author, pages, and read to bookInfo
  bookInfo.appendChild(title);
  bookInfo.appendChild(author);
  bookInfo.appendChild(pages);
  bookInfo.appendChild(read);

  // Now, you have a structure where all elements are children of bookInfo

  book.appendChild(bookInfo);

  bookLibrary.append(book);
}

// createBook();
// createBook();
// createBook();


function createBookElement(titleText, authorText, pagesText, imageCover, readStatusText) {
  // Create the main book container
  const book = document.createElement('div');
  book.classList.add('book');

  // Create the bookImgContainer element
  const bookImgContainer = document.createElement('div');
  bookImgContainer.classList.add('bookImgContainer');

  // Create the img element
  const img = document.createElement('img');
  img.id = 'bookImg';
  img.src = 'assets/' + imageCover + '.jpeg';
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
  title.textContent = titleText;

  // Create the author element
  const author = document.createElement('div');
  author.id = 'author';
  author.textContent = authorText;

  // Create the pages element
  const pages = document.createElement('div');
  pages.classList.add('pages');
  pages.textContent = pagesText;

  // Create the readStatus element
  const readStatus = document.createElement('div');
  readStatus.id = 'readStatus';
  readStatus.textContent = readStatusText;

  // Append title, author, pages, and readStatus to bookInfo
  bookInfo.appendChild(title);
  bookInfo.appendChild(author);
  bookInfo.appendChild(pages);
  bookInfo.appendChild(readStatus);

  // Append bookImgContainer and bookInfo to the book
  book.appendChild(bookImgContainer);
  book.appendChild(bookInfo);

  bookLibrary.append(book);

  let bookItem = new Book(title, authorText, pagesText, imageCover, readStatusText);
  myLibrary.push(bookItem);
  
  return book;
}

createBookElement('JJK', 'Gege', '69', 'jjkCover', 'true');
createBookElement('JJK', 'Gege', '69', 'jjkCover', 'true');
createBookElement('JJK', 'Gege', '69', 'jjkCover', 'true');
// createBookElement('jjk', 'gege', '78', 'true');
// createBookElement('jjk', 'gege', '78', 'true');
// createBookElement('jjk', 'gege', '78', 'true');

function displayBooks(array) {
  array.forEach(function(item) {
    console.log(item);
  });
}

displayBooks(myLibrary);