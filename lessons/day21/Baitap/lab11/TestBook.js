"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BookController_1 = require("./BookController");
var readline = require('readline-sync');
var bookController = new BookController_1.default();
showMenu();
function handleNewBook() {
    var ISBN = readline.question("Please input ISBN:");
    var title = readline.question("Please input title:");
    var author = readline.question("Please input author:");
    var year = Number(readline.question("Please input year:"));
    if (!ISBN || !title || !author || isNaN(year)) {
        console.log("Invalid input. All fields are required and year must be a number.");
        return;
    }
    bookController.addBook(ISBN, title, author, year);
}
function handleFindBook() {
    var ISBN = readline.question("Please input ISBN:");
    if (!ISBN) {
        console.log("ISBN is required.");
        return;
    }
    bookController.searchBook(ISBN);
}
function handleUpdateBook() {
    var ISBN = readline.question("Please input ISBN:");
    if (!ISBN) {
        console.log("ISBN is required.");
        return;
    }
    var book = bookController.findBookByISBN(ISBN);
    if (!book) {
        console.log("Book with ISBN <".concat(ISBN, "> is not found"));
        return;
    }
    var title = readline.question("Please input new title:".concat(book.getTitle()));
    var author = readline.question("Please input new author name:".concat(book.getAuthor()));
    var year = Number(readline.question("Please input new year: ".concat(book.getYear().toString())));
    if (isNaN(year)) {
        console.log("Year must be a number.");
        return;
    }
    bookController.updateBook(ISBN, title, author, year);
}
function handleDeleteBook() {
    var ISBN = readline.question("Please input ISBN:");
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
        var choice = readline.question("Please select an option (0-5):");
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
