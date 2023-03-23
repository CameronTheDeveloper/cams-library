const bookList = document.querySelector('#book-list');
let books = [];             // Stores all Book objects
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
}

function displayBooks() {
    for (i = 0; i < books.length; i++) {
        const newBook = document.createElement('div');
        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPages = document.createElement('div');
        bookList.append(newBook);                   //Add divs to newBook div in HTML
        newBook.appendChild(bookTitle);
        newBook.appendChild(bookAuthor);
        newBook.appendChild(bookPages);
        bookTitle.innerHTML = books[i].title;       //Add content inside each div
        bookAuthor.innerHTML = books[i].author;
        bookPages.innerHTML = books[i].author;
    }
}

addBookToBooks();
displayBooks();

