// yee ! Learned using dialog :)
class Book {
    constructor(title, authorName, numberOfPages, readStatus) {
        this.title = title;
        this.authorName = authorName;
        this.numberOfPages = numberOfPages;
        this.readStatus = readStatus;
    }
}

class Library {
    constructor() {
        this.books = [];
        this.container = document.querySelector('.div-3');
        this.dialogPopUp = document.querySelector('dialog');
        this.addBookButton = document.querySelector('.addBook');
        this.form = document.querySelector('form');
        this.init();
    }

    init() {
        this.addBookButton.addEventListener('click', () => this.dialogPopUp.showModal());
        this.form.addEventListener('submit', (event) => this.handleFormSubmit(event));
        const cancelButton = document.querySelector('#cancelBtn');
        cancelButton.addEventListener('click', () => this.dialogPopUp.close());
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const title = document.querySelector('#title').value;
        const authorName = document.querySelector('#author').value;
        const numberOfPages = document.querySelector('#pages').value;
        const readStatus = document.querySelector('input[name="readStatus"]:checked').value === 'true';

        const newBook = new Book(title, authorName, numberOfPages, readStatus);
        this.books.push(newBook);
        this.addBookToLibrary(newBook);

        this.dialogPopUp.close();
        this.form.reset();
    }

    addBookToLibrary(book) {
        const bookContainer = document.createElement('div');
        bookContainer.classList.add('bookContainer');

        const title = document.createElement('h1');
        title.textContent = book.title;
        bookContainer.appendChild(title);

        const authorName = document.createElement('h3');
        authorName.textContent = `Name of author: ${book.authorName}`;
        bookContainer.appendChild(authorName);

        const numberOfPages = document.createElement('h3');
        numberOfPages.textContent = `Number of pages: ${book.numberOfPages}`;
        bookContainer.appendChild(numberOfPages);

        const buttons = document.createElement('div');
        buttons.classList.add('buttons');

        const askReadStatus = document.createElement('h4');
        askReadStatus.textContent = 'Have you read it:';
        buttons.appendChild(askReadStatus);

        const readStatus = document.createElement('button');
        readStatus.style.color = 'white';
        readStatus.textContent = book.readStatus ? 'Yes' : 'No';
        readStatus.style.backgroundColor = book.readStatus ? 'green' : 'red';
        readStatus.classList.add('readButton');
        buttons.appendChild(readStatus);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButton');
        deleteButton.style.backgroundColor = 'red';
        deleteButton.style.color = 'white';
        deleteButton.textContent = 'Delete';
        buttons.appendChild(deleteButton);

        bookContainer.appendChild(buttons);
        this.container.appendChild(bookContainer);

        readStatus.addEventListener('click', () => this.toggleReadStatus(book, readStatus));
        deleteButton.addEventListener('click', () => this.deleteBook(book, bookContainer));
    }

    toggleReadStatus(book, readStatusButton) {
        book.readStatus = !book.readStatus;
        readStatusButton.textContent = book.readStatus ? 'Yes' : 'No';
        readStatusButton.style.backgroundColor = book.readStatus ? 'green' : 'red';
    }

    deleteBook(book, bookContainer) {
        this.books = this.books.filter(b => b !== book);
        this.container.removeChild(bookContainer);
    }
}

const library = new Library();

const harryPotter = new Book('Harry Potter', 'JK Rowling', 1234, true);
library.addBookToLibrary(harryPotter);

const meditations = new Book('Meditations', 'Marcus Aurelius', 340, false);
library.addBookToLibrary(meditations);
