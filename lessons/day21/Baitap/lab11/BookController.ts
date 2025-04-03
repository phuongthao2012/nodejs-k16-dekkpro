// BookController.ts - Class điều khiển các thao tác với sách
import Book from './Book';

export default class BookController {
  private books: Book[] = [];

  
  constructor() {
    this.books.push(new Book("1234", "Cuon theo chieu gio", "Teo", 2022));
    this.books.push(new Book("12345", "Tieng chim hot trong bui man gai", "Ti", 2021));
  }
  // Add new book
  addBook(ISBN: string, title: string, author: string, year: number): boolean {
    // Check ISBN is existing
    if (this.findBookByISBN(ISBN)) {
      console.log(`Book with ISBN ${ISBN} already exists.`);
      return false;
    }

    const newBook = new Book(ISBN, title, author, year);
    this.books.push(newBook);
    
    console.log("The book is saved into DB with info:");
    console.log(newBook.getBookInfo());
    
    return true;
  }

  // Find book follows ISBN
  findBookByISBN(ISBN: string): Book | undefined {
    return this.books.find(book => book.getISBN() === ISBN);
  }

  // Show book info
  searchBook(ISBN: string): Book | undefined {
    const book = this.findBookByISBN(ISBN);
    if (book) {
      console.log(book.getBookInfo());
      return book;
    } else {
      console.log(`Book with ISBN <${ISBN}> is not found`);
      return undefined;
    }
  }

  // Update book info
  updateBook(ISBN: string, title: string, author: string, year: number): boolean {
    const existingBook = this.findBookByISBN(ISBN);
    if (!existingBook) {
      console.log(`Book with ISBN <${ISBN}> is not found`);
      return false;
    }

    existingBook.setTitle(title);
    existingBook.setAuthor(author);
    existingBook.setYear(year);
    
    console.log("The book is now updated with new content:");
    console.log(existingBook.getBookInfo());
    
    return true;
  }

  // Delete book
  deleteBook(ISBN: string): boolean {
    const index = this.books.findIndex(book => book.getISBN() === ISBN);
    if (index === -1) {
      console.log(`Book with ISBN <${ISBN}> is not found`);
      return false;
    }
    
    this.books.splice(index, 1);
    console.log(`Book with ISBN <${ISBN}> has been deleted.`);
    
    return true;
  }


   // Get all books
  getAllBooks(): Book[] {
    return [...this.books]; // Return a copy to prevent direct modification
  }

  // Get book count
  getBookCount(): number {
    return this.books.length;
  }

  // Print all books
  printBookList(): void {
    if (this.books.length === 0) {
      console.log("The book list is empty.");
      return;
    }

    this.books.forEach((book, index) => {
      console.log(`Book ${(index + 1).toString().padStart(2, '0')}: ${book.getTitle()}`);
      console.log(`     ISBN: ${book.getISBN()}`);
      console.log(`     author: ${book.getAuthor()}`);
      console.log(`     year: ${book.getYear()}`);
      console.log("");
    });
  }
}
