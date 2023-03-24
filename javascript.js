const bookList = document.querySelector('#book-list');      //Book list container
const newBookButton = document.querySelector('#new-book-button');       //Add Book button
let books = [];   // Stores all Book objects
let index = 0;    // books index
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Add book to 'books' array
function addBookToBooks() {
    let title = prompt("Enter title: ");
    let author = prompt("Enter author: ");
    let pages = prompt("Enter pages: ");
    const book = new Book(title, author, pages);
    books.push(book);
    index = displayBooks(index);
}

function displayBooks(index) {
    while (index < books.length) {
        const newBook = document.createElement('div');
        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPages = document.createElement('div');
        newBook.classList.add("book" /* + index*/);
        bookTitle.classList.add("book-title");
        bookAuthor.classList.add("book-author");
        bookPages.classList.add("book-pages");
        bookList.append(newBook);                   //Add divs in newBook div in HTML
        newBook.appendChild(bookTitle);
        newBook.appendChild(bookAuthor);
        newBook.appendChild(bookPages);
        bookTitle.innerHTML = "Title: " + books[index].title;       //Add content inside each div
        bookAuthor.innerHTML = "Author: " + books[index].author;
        bookPages.innerHTML = "Pages: " + books[index].pages;
        index++;
    }
    return index;
}

newBookButton.addEventListener('click', () => {
    addBookToBooks();
});




