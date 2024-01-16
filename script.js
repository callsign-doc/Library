function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = typeof readStatus === 'boolean' ? readStatus : false;

  this.getInfo = function() {
    return `${this.title} by ${this.author}. ${this.pages} short. Read: ${this.readStatus}`;
  }
}

function addToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks(array) {
  
}

const myLibrary = [];

let jjk = new Book('JJK', 'Gege', '69', true);
let lotr = new Book('Lord of the Rings', 'JRR Tolkien', '570', false);
// console.log(jjk.getInfo());

addToLibrary(jjk);
addToLibrary(lotr);
console.log(myLibrary);







// RESPONSIVE SECTION--------------------------------
const bookLibrary = document.querySelector('.contentContainer');

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

createBook();
createBook();
createBook();
