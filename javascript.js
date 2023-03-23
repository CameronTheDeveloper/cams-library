let books = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToBooks() {
    let title = prompt("Enter title: ");
    let author = prompt("Enter author: ");
    let pages = prompt("Enter pages: ");
    const book = new Book(title, author, pages);
    books.push(book);
}

function displayBooks() {
    for (i = 0; i < books.length; i++) {
        //display books[i].name, etc.
    }

}

addBookToBooks();

