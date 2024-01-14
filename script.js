function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = typeof readStatus === 'boolean' ? readStatus : false;

  this.getInfo = function() {
    return `${this.title} by ${this.author}. ${this.pages} short. Read: ${this.readStatus}`;
  }
}

const myLibrary = [];




let jjk = new Book('JJK', 'Gege', '69', true);
console.log(jjk.getInfo());