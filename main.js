//let myLibrary = [];

/*function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = () => {
		console.log(title, author, pages, read);
	};
}

const theVelveteenRabbit = new Book(
	"The Velveteen Rabbit",
	"Margery Williams",
	32,
	"read"
);
const missSuzy = new Book("Miss Suzy", "Miriam Young", 40, "read");
const madeline = new Book("Madeline", "Ludwig bemelmans", 56, "read");
const whereTheWildThingsAre = new Book(
	"Where The Wild Things Are",
	"Maurice Sendak",
	48,
	"read"
);
const theCatInTheHat = new Book("The Cat in the Hat", "Dr. Seuss", 72, "read");
theVelveteenRabbit.info();
missSuzy.info();
madeline.info();
whereTheWildThingsAre.info();
theCatInTheHat.info();*/

//function addBookToLibrary() {}

//------------------------------------------------------------------------

//Gives functionality to "Add Book" button
//Function creates a window in the middle of the page
//The window contains inputs required to add a book to the page
const addBook = document.querySelector(".add-book");
addBook.addEventListener("click", () => {
	const inputWindow = document.createElement("div");
	inputWindow.className = "input-window";
	document.body.append(inputWindow);

	//Creates the close button at the top right of the window
	const close = document.createElement("div");
	close.setAttribute("id", "close-btn");
	close.innerHTML = "X";
	inputWindow.appendChild(close);

	//Arrays used to give attributes to the elements created in the following loop
	//The inputContainers are created for easier styling
	const inputTypes = ["text", "text", "number", "radio", "radio"];
	const inputNames = ["title", "author", "pages", "read", "unread"];
	for (let i = 0; i < inputNames.length; i++) {
		const inputContainer = document.createElement("div");
		const label = document.createElement("label");
		const input = document.createElement("input");
		inputContainer.setAttribute("id", inputNames[i] + "-container");
		label.setAttribute("for", inputNames[i]);
		label.innerHTML = inputNames[i].toUpperCase() + ": ";
		input.type = inputTypes[i];
		input.name = inputNames[i];
		inputWindow.appendChild(inputContainer);
		inputContainer.appendChild(label);
		inputContainer.appendChild(input);
	}
});
