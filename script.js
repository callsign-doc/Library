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

