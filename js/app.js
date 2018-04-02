"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
var util = require("./lib/utilityFunctions");
//function PrintBookInfo({title: booktitle, author: bookauthor} : Book): void {
function PrintBookInfo(item) {
    // console.log(`${item.title} was authored by ${item.author}`);
    console.log(item.title + " was authored by " + item.author);
    return [item.title, item.author];
}
function LogFavouriteBooks(_a) {
    var book1 = _a[0], book2 = _a[1], others = _a.slice(2);
    PrintBookInfo(book1);
    PrintBookInfo(book2);
    others.forEach(function (book) { return console.log(book); });
}
function PrintTitle(item) {
    console.log(item.title);
}
/***************************************************************************************** */
//Destructuring Arrays
var _a = util.GetAllBooks(), book1 = _a[0], book2 = _a[1];
//PrintBookInfo(book1);
// PrintBookInfo(book2);
//LogFavouriteBooks(util.GetAllBooks());
//Destructuring Objects
var title = book1.title, author = book1.author;
// console.log(title);
// console.log(author);
//Destructuring Objects option 2
var booktitle = book1.title, bookauthor = book1.author;
// console.log(booktitle);
// console.log(bookauthor);
var schoolBooks = [
    { id: 1, title: 'The Great Gatsby', author: 'James Royce', available: true, category: enums_1.Category.Biography },
    { id: 2, title: 'Crime and Punishment', author: 'Ernest Hemingway', available: false, category: enums_1.Category.Poetry },
    { id: 3, title: 'Clear light of Day ', author: 'Maya Angelou', available: true, category: enums_1.Category.Biography }
];
var booksRead = util.GetAllBooks();
//Spread operator
booksRead.push.apply(booksRead, schoolBooks);
// booksRead.forEach(book => console.log(book));
var poets = ['Shelley', 'Collins', 'hughes'];
var authors = ['Tolstoy', 'Fitzgerald'].concat(poets);
//authors.forEach(book => console.log(book));
//Tuples
var booksPrinted = PrintBookInfo(book1);
//console.log(booksPrinted);
//the fileds types must be the same
// let catalogLocations: [string, Book] = ['A 123.456', book1];
// catalogLocations[2] = 'some string';
// catalogLocations.forEach(book => console.log(book));
var catalogLocations = ['A 123.456', book1];
//Union Types
var allBooks = util.GetAllBooks();
var allMagazines = util.GetAllMagazines();
var readingMaterial, Magazine = allMagazines[0];
PrintTitle(allBooks[0]);
PrintTitle(allMagazines[0]);
//# sourceMappingURL=app.js.map