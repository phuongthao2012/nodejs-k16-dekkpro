"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// BookController.ts - Class điều khiển các thao tác với sách
var Book_1 = require("./Book");
var BookController = /** @class */ (function () {
    function BookController() {
        this.books = [];
        this.books.push(new Book_1.default("1234", "Cuon theo chieu gio", "Teo", 2022));
        this.books.push(new Book_1.default("12345", "Tieng chim hot trong bui man gai", "Ti", 2021));
    }
    // Add new book
    BookController.prototype.addBook = function (ISBN, title, author, year) {
        // Check ISBN is existing
        if (this.findBookByISBN(ISBN)) {
            console.log("Book with ISBN ".concat(ISBN, " already exists."));
            return false;
        }
        var newBook = new Book_1.default(ISBN, title, author, year);
        this.books.push(newBook);
        console.log("The book is saved into DB with info:");
        console.log(newBook.getBookInfo());
        return true;
    };
    // Find book follows ISBN
    BookController.prototype.findBookByISBN = function (ISBN) {
        return this.books.find(function (book) { return book.getISBN() === ISBN; });
    };
    // Show book info
    BookController.prototype.searchBook = function (ISBN) {
        var book = this.findBookByISBN(ISBN);
        if (book) {
            console.log(book.getBookInfo());
            return book;
        }
        else {
            console.log("Book with ISBN <".concat(ISBN, "> is not found"));
            return undefined;
        }
    };
    // Update book info
    BookController.prototype.updateBook = function (ISBN, title, author, year) {
        var existingBook = this.findBookByISBN(ISBN);
        if (!existingBook) {
            console.log("Book with ISBN <".concat(ISBN, "> is not found"));
            return false;
        }
        existingBook.setTitle(title);
        existingBook.setAuthor(author);
        existingBook.setYear(year);
        console.log("The book is now updated with new content:");
        console.log(existingBook.getBookInfo());
        return true;
    };
    // Delete book
    BookController.prototype.deleteBook = function (ISBN) {
        var index = this.books.findIndex(function (book) { return book.getISBN() === ISBN; });
        if (index === -1) {
            console.log("Book with ISBN <".concat(ISBN, "> is not found"));
            return false;
        }
        this.books.splice(index, 1);
        console.log("Book with ISBN <".concat(ISBN, "> has been deleted."));
        return true;
    };
    return BookController;
}());
exports.default = BookController;
