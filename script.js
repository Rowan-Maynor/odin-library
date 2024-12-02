const myLibrary = [];
const main = document.getElementById("main");

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
    //create bookCard div
    createBookDiv(id);
    //create title p
    //attach to div
    createBookTitle(id, title)
    //create description p
    //attach to div
    //create has not read p
    //attach to div
    //add on click event for has not read p to toggle
    //create remove book p
    //attach to div
    //add on click event for remove entire book div
}

function createBookDiv(id) {
    const newDiv = document.createElement("div");
    newDiv.classList = "flex-container book-card";
    newDiv.id = `${id}`
    main.appendChild(newDiv);
}

function createBookTitle(id, title) {
    const newP = document.createElement("p");
    newP.classList = "book-section book-title";
    newP.textContent = `${title}`;
    const cardDiv = document.getElementById(`${id}`);
    cardDiv.appendChild(newP);
}