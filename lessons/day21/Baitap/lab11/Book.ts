export default class Book {
    private ISBN: string;
    private title: string;
    private author: string;
    private year: number

    constructor(ISBN: string, title: string, author: string, year: number) {
        this.ISBN = ISBN;
        this.title = title;
        this.author = author;
        this.year = year;
    }

    // Getters
    public getISBN(): string {
        return this.ISBN;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getYear(): number {
        return this.year;
    }

    // Setters
    public setTitle(title: string): void {
        this.title = title;
    }

    public setAuthor(author: string): void {
        this.author = author;
    }

    public setYear(year: number): void {
        this.year = year;
    }

    // Book information
    getBookInfo(): string {
        return `Book {${this.ISBN}, ${this.title}, ${this.author}, ${this.year}}`;
    }
}
