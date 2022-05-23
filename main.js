function Book(title, author, pages, read) {
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
theCatInTheHat.info();
