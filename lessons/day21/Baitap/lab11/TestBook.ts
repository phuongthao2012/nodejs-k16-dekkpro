import BookController from './BookController';
import Book from './Book';
const readline = require('readline-sync');

let bookController = new BookController();
showMenu();


function handleNewBook() {
    const ISBN = readline.question(`Please input ISBN:`);
    const title = readline.question(`Please input title:`);
    const author = readline.question(`Please input author:`);
    const year = Number(readline.question(`Please input year:`));

    if (!ISBN || !title || !author || isNaN(year)) {
        console.log("Invalid input. All fields are required and year must be a number.");
        return;
    }

    bookController.addBook(ISBN, title, author, year);
}

function handleFindBook(): void {
    const ISBN = readline.question("Please input ISBN:");
    if (!ISBN) {
        console.log("ISBN is required.");
        return;
    }

    bookController.searchBook(ISBN);
}

function handleUpdateBook() {
    const ISBN = readline.question("Please input ISBN:");
    if (!ISBN) {
        console.log("ISBN is required.");
        return;
    }

    const book = bookController.findBookByISBN(ISBN);
    if (!book) {
        console.log(`Book with ISBN <${ISBN}> is not found`);
        return;
    }

    const title = readline.question(`Please input new title:${book.getTitle()}`);
    const author = readline.question(`Please input new author name:${book.getAuthor()}`);
    const year = Number(readline.question(`Please input new year: ${book.getYear().toString()}`));


    if (isNaN(year)) {
        console.log("Year must be a number.");
        return;
    }

    bookController.updateBook(ISBN, title, author, year);
}

function handleDeleteBook() {
    const ISBN = readline.question("Please input ISBN:");
    if (!ISBN) {
        console.log("ISBN is required.");
        return;
    }

    bookController.deleteBook(ISBN);
}


function showMenu() {
    while (true) {
        console.log("\n===== BOOK MANAGEMENT SYSTEM =====");
        console.log("1. New book");
        console.log("2. Find a book");
        console.log("3. Update a book");
        console.log("4. Delete a book");
        console.log("0. Exit");

        const choice = readline.question(`Please select an option (0-5):`);

        switch (choice) {
            case "1":
                handleNewBook();
                break;
            case "2":
                handleFindBook();
                break;
            case "3":
                handleUpdateBook();
                break;
            case "4":
                handleDeleteBook();
                break;
            case "0":
                console.log("Exiting the program. Goodbye!");
                return;
            default:
                console.log("Invalid option. Please try again.");
        }
    }
}



