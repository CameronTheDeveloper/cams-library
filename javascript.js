let books = [];

function Book(title, author, pages) {
    self.title = title;
    self.author = author;
    self.pages = pages;
}

function addBookToBooks() {
    let title = prompt("Enter title: ");
    let author = prompt("Enter author: ");
    let pages = prompt("Enter pages: ");
    const book = new Book(title, author, pages);
    books.push();
}

addBookToBooks();

