// yee ! Learned using dialog :)
const dialogPopUp = document.querySelector("dialog");
const addBook = document.querySelector(".addBook");

addBook.addEventListener("click", () => {
    dialogPopUp.showModal();
})

const container = document.querySelector(".div-3");


const myLibrary = [];

function Book(title, authorName, numberOfPages, readStatus) {
    this.title = title;
    this.authorName = authorName;
    this.numberOfPages = numberOfPages;
    this.readStatus = readStatus;
}

function addBookToLibrary(newBook) {
    
    const tempBookContainer = document.createElement("div");
    tempBookContainer.classList.add("bookContainer");

    const title = document.createElement("h1");
    title.textContent = newBook.title;
    tempBookContainer.appendChild(title);

    const authorName = document.createElement("h3");
    authorName.textContent = `Name of author :  ${newBook.authorName}`;
    tempBookContainer.appendChild(authorName);

    const numberOfPages = document.createElement("h3");
    numberOfPages.textContent = `Number of pages : ${newBook.numberOfPages}`;
    tempBookContainer.appendChild(numberOfPages);

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    const askReadStatus = document.createElement("h4");
    askReadStatus.textContent = "Have you read it:";
    buttons.appendChild(askReadStatus);
    const readStatus = document.createElement("button");
    readStatus.style.color = "white";
    if (newBook.readStatus) {
        readStatus.textContent = "Yes";
        readStatus.style.backgroundColor = "green";
    } else {
        readStatus.textContent = "No";
        readStatus.style.backgroundColor = "red";
    }
    readStatus.classList.add("readButton");
    buttons.appendChild(readStatus);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.color = "white";
    deleteButton.textContent = "Delete";

    buttons.appendChild(deleteButton);
    tempBookContainer.appendChild(buttons);
    console.log(buttons)
    container.appendChild(tempBookContainer);

    readStatus.addEventListener("click", () => {
        if (newBook.readStatus) {
            readStatus.style.backgroundColor = "red";
            readStatus.textContent = "No";
        } else {
            readStatus.style.backgroundColor = "green";
            readStatus.textContent = "Yes";
        }
        newBook.readStatus = !newBook.readStatus;
    });

    deleteButton.addEventListener("click", () => {
        myLibrary.splice(newBook.index, 1);
        container.removeChild(tempBookContainer);
    });

}


const forminput = document.querySelector("form");

forminput.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value;
    const authorName = document.querySelector("#author").value;
    const numberOfPages = document.querySelector("#pages").value;
    const readStatus = document.querySelector('input[name="readStatus"]:checked').value === "true";

    const newBook = new Book(title, authorName, numberOfPages, readStatus);
    myLibrary.push(newBook);
    addBookToLibrary(newBook);

    dialogPopUp.close();
    forminput.reset();
});

const cancelButton = document.querySelector("#cancelBtn");
cancelButton.addEventListener("click", () => {
    dialogPopUp.close();
});

const harryPotter = new Book('Harry Potter','JK Rowling', 1234, true);
addBookToLibrary(harryPotter);
const meditations = new Book('Meditations','Marcus Aurilius', 340 , false);
addBookToLibrary(meditations);