"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book(ISBN, title, author, year) {
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    // Getters
    Book.prototype.getISBN = function () {
        return this.ISBN;
    };
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getYear = function () {
        return this.year;
    };
    // Setters
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.setYear = function (year) {
        this.year = year;
    };
    // Book information
    Book.prototype.getBookInfo = function () {
        return "Book {".concat(this.ISBN, ", ").concat(this.title, ", ").concat(this.author, ", ").concat(this.year, "}");
    };
    return Book;
}());
exports.default = Book;
