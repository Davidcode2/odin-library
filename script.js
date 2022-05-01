const book1 = new Book("Lord of the rings", "J.R.R Tolkien", 1979, 600, true);
const book2 = new Book("Lord of the rings", "J.R.R Tolkien", 1979, 600, true);
const book3 = new Book("Lord of the rings", "J.R.R Tolkien", 1979, 600, true);

let myLibrary = [book1, book2, book3];

let book_cards = document.querySelector(".book-cards-wrapper");

function Book(title, author, releaseDate, numberOfPages, wasRead) {
	this.title = title
	this.author = author
	this.releaseDate = releaseDate
	this.numberOfPages = numberOfPages
	this.wasRead = wasRead
	this.info = function() {
		let str = `The Book "${this.title}" was written by ${this["author"]} in ${this.releaseDate} and has ${this.numberOfPages} pages. I have${this.wasRead ? '' : ' not'} read the book.`
		return str;
	}
}

let addBookForm = document.querySelector('form');
let bookFormButton = document.querySelector("form > button");
bookFormButton.addEventListener("click", () => {
	addBookToLibrary();
});

function addBookToLibrary() {
	let newBook = new Book(addBookForm.title.value, addBookForm.author.value, addBookForm.releaseDate.value, addBookForm.pages.value, addBookForm.read.value);
	console.log(newBook);
	myLibrary.push(newBook);
	addBookCard(newBook);
}

let counter = 0;
function addBookCard(book) {
	// create book card
	let book_card = document.createElement('div');
	book_card.classList.add("book-card");
	book_card.dataset.id = counter;
	counter++;
	book_cards.appendChild(book_card);
	addBookCardContent(book_card, book);
	// append read button
	let book_read_button = document.createElement("button");
	book_read_button.textContent = "read";
	book_read_button.classList.add("card-button");
	book_card.appendChild(book_read_button);
	book_read_button.addEventListener('click', readBook);
	// append remove button
	let book_remove_button = document.createElement("button");
	book_remove_button.textContent = "remove";
	book_remove_button.classList.add("card-button");
	book_remove_button.classList.add("remove-Button");
	book_card.appendChild(book_remove_button);
	book_remove_button.addEventListener('click', removeBook);
}

function addBookCardContent(card, book) {
	// append book title
	let book_title = document.createElement("p");
	book_title.classList.add("card-book-content");
	book_title.textContent = book.info();
	card.appendChild(book_title);
}

function updateBookCard(book) {
}

function readBook() {
	console.log(this.parentElement.dataset.id);
	myLibrary[this.parentElement.dataset.id].wasRead == true
	? myLibrary[this.parentElement.dataset.id].wasRead = false
	: myLibrary[this.parentElement.dataset.id].wasRead = true;
	this.previousSibling.textContent = myLibrary[this.parentElement.dataset.id].info();

}

for (let i = 0; i < myLibrary.length; i++) {
	addBookCard(myLibrary[i]);
}

function removeBook() {
	myLibrary.splice(this.parentElement.dataset.id,1);
	this.parentElement.remove();
}

let addBookFormButton = document.querySelector('.add-book-button');
addBookFormButton.addEventListener('click', () => {
	hideUnhide();
});

function hideUnhide() {
	addBookForm.style.display === "none"
		? addBookForm.style.display = "flex"
		: addBookForm.style.display = "none";
	console.log(addBookForm.style.display);
}

console.log(book1.info());
