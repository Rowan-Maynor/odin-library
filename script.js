const myLibrary = [];
const content = document.getElementById("content");
const bookForm = document.getElementById("submit-book-form");

function Book(title, description) {
    this.title = title;
    this.description = description;
    hasRead: false;
}

function addBookToLibrary(id, title, description) {
    const book = new Book(title, description);
    myLibrary.push(book);
    createBookCard(id, title, description);
}

function createBookCard(id, title, description) {
    createBookDiv(id);
    createBookTitle(id, title);
    createBookDescription(id, description);
    createHasReadToggle(id);
    createRemoveBook(id);
}

function createBookDiv(id) {
    const newDiv = document.createElement("div");
    newDiv.classList = "flex-container book-card";
    newDiv.id = `${id}`
    content.appendChild(newDiv);
}

function createBookTitle(id, title) {
    const newP = document.createElement("p");
    newP.classList = "book-section book-title";
    newP.textContent = `${title}`;
    const cardDiv = document.getElementById(`${id}`);
    cardDiv.appendChild(newP);
}

function createBookDescription(id, description) {
    const newP = document.createElement("p");
    newP.classList = "book-section book-description";
    newP.textContent = `${description}`;
    const cardDiv = document.getElementById(`${id}`);
    cardDiv.appendChild(newP);
}

function createHasReadToggle(id) {
    const newP = document.createElement("p");
    newP.classList = "book-section book-read-toggle-false";
    newP.textContent = "Has Not Read";

    newP.addEventListener("click", function(){
        if(this.classList == "book-section book-read-toggle-false"){
            this.classList = "book-section book-read-toggle-true";
            this.textContent = "Has Read";
        } else {
            this.classList = "book-section book-read-toggle-false";
            this.textContent = "Has Not Read";
        }
    });

    const cardDiv = document.getElementById(`${id}`);
    cardDiv.appendChild(newP);
}

function createRemoveBook(id) {
    const newP = document.createElement("p");
    newP.classList = "book-section book-remove";
    newP.textContent = "Remove Book";

    newP.addEventListener("click", function(){
        this.parentElement.remove();
    });

    const cardDiv = document.getElementById(`${id}`);
    cardDiv.appendChild(newP);
}

bookForm.onsubmit = function(event){
    event.preventDefault();
    const id = bookForm.bookTitle.value;
    const title = bookForm.bookTitle.value;
    const desc = bookForm.bookDesc.value;
    addBookToLibrary(id, title, desc);
}