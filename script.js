const myLibrary = [];
const content = document.getElementById("content");

function Book(title, description) {
    this.title = title;
    this.description = description;
    hasRead: false;
}

function addBookToLibrary(title, description) {
    const book = new Book(title, description);
    myLibrary.push(book);
}

function createBookCard(id, title, description) {
    createBookDiv(id);
    createBookTitle(id, title);
    createBookDescription(id, description);
    createHasReadToggle(id);
    //add on click event for has not read p to toggle
    //create remove book p
    //attach to div
    //add on click event for remove entire book div
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
        if(this.classList=="book-section book-read-toggle-false"){
            this.classList="book-section book-read-toggle-true";
            this.textContent="Has Read"
        } else {
            this.classList="book-section book-read-toggle-false";
            this.textContent="Has Not Read"
        }
    });

    const cardDiv = document.getElementById(`${id}`);
    cardDiv.appendChild(newP);
}