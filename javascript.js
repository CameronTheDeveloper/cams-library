const bookList = document.querySelector('#book-list');              // Book list container
const newBookButton = document.querySelector('#new-book-button');   // Add Book button
const addBookForm = document.querySelector('#add-book-form');       // Form that adds books
let books = [];   // Stores all Book objects
let index = 0;    // books index
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Add book to 'books' array
function addBookToBooks() {
    let title = document.getElementById('book-title').value;
    let author = document.getElementById('book-author').value;
    let pages = document.getElementById('book-pages').value;
    let read = document.getElementById('book-read').checked;
    const book = new Book(title, author, pages, read);
    books.push(book);
    index = displayBooks(index);
}

// Display the books by looping through 'books' array
function displayBooks(index) {
    while (index < books.length) {
        const newBook = document.createElement('div');
        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPages = document.createElement('div');
        const bookRead = document.createElement('div');
        const removeButtonDiv = document.createElement('div');
        const removeButton = document.createElement('button');
        newBook.classList.add('book' /* + index*/);
        bookTitle.classList.add('title');
        bookAuthor.classList.add('author');
        bookPages.classList.add('pages');
        bookRead.classList.add('read');
        removeButtonDiv.classList.add('remove-button');
        bookList.append(newBook);
        newBook.appendChild(bookTitle);
        newBook.appendChild(bookAuthor);
        newBook.appendChild(bookPages);
        newBook.appendChild(bookRead);
        removeButtonDiv.appendChild(removeButton);
        newBook.appendChild(removeButtonDiv);

        bookTitle.innerHTML = books[index].title;       // Add content inside each div
        bookAuthor.innerHTML = 'By: ' + books[index].author;
        bookPages.innerHTML = 'Pages: ' + books[index].pages;
        createCheckBox(bookRead);   //Create Read checkbox in book
        removeButton.innerHTML = "Remove";
        // if (books[index].read) {    //Book read
        //     bookRead.innerHTML = 'Read';
        // } else {
        //     bookRead.innerHTML = 'Unread';
        // }

        index++;
    }
    return index;
}

// Add a "read" checkbox on each created book
function createCheckBox(bookRead) {
    let checkLabel = document.createElement('label');
    let checkBox = document.createElement('input');

    checkLabel.for = 'read';
    checkLabel.innerHTML = 'Read: ';
    checkBox.type = 'checkbox';
    checkBox.name = 'read';
    checkBox.id = 'read';
    bookRead.appendChild(checkLabel);
    bookRead.appendChild(checkBox);
}

newBookButton.addEventListener('click', () => {
    if (addBookForm.style.display == 'none') {
        addBookForm.style.display = 'block';
    } else {
        addBookForm.style.display = 'none';
    }
});

addBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToBooks();
    addBookForm.style.display = 'none';
});


