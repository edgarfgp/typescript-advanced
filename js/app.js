"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const classes_1 = require("./classes");
const util = require("./lib/utilityFunctions");
//function PrintBookInfo({title: booktitle, author: bookauthor} : Book): void {
function PrintBookInfo(item) {
    // console.log(`${item.title} was authored by ${item.author}`);
    console.log(`${item.title} was authored by ${item.author}`);
    return [item.title, item.author];
}
function LogFavouriteBooks([book1, book2, ...others]) {
    PrintBookInfo(book1);
    PrintBookInfo(book2);
    others.forEach(book => console.log(book));
}
function PrintTitle(item) {
    console.log(item.title);
}
/**
*This Method allow us to create a new class wich is a mix of two classes
*/
function applyMixins(deriverCto, baseCtors) {
    baseCtors.forEach(baseCtors => {
        Object.getOwnPropertyNames(baseCtors.prototype).forEach(name => {
            deriverCto.prototype[name] = baseCtors.prototype[name];
        });
    });
}
function GetMagazineByFrecuency(preferredFrecuency) {
}
/***************************************************************************************** */
//Destructuring Arrays
let [book1, book2] = util.GetAllBooks();
//PrintBookInfo(book1);
// PrintBookInfo(book2);
//LogFavouriteBooks(util.GetAllBooks());
//Destructuring Objects
let { title, author } = book1;
// console.log(title);
// console.log(author);
//Destructuring Objects option 2
let { title: booktitle, author: bookauthor } = book1;
// console.log(booktitle);
// console.log(bookauthor);
let schoolBooks = [
    { id: 1, title: 'The Great Gatsby', author: 'James Royce', available: true, category: enums_1.Category.Biography },
    { id: 2, title: 'Crime and Punishment', author: 'Ernest Hemingway', available: false, category: enums_1.Category.Poetry },
    { id: 3, title: 'Clear light of Day ', author: 'Maya Angelou', available: true, category: enums_1.Category.Biography }
];
let booksRead = util.GetAllBooks();
//Spread operator
booksRead.push(...schoolBooks);
// booksRead.forEach(book => console.log(book));
let poets = ['Shelley', 'Collins', 'hughes'];
let authors = ['Tolstoy', 'Fitzgerald', ...poets];
//authors.forEach(book => console.log(book));
//Tuples
let booksPrinted = PrintBookInfo(book1);
//console.log(booksPrinted);
//the fileds types must be the same
// let catalogLocations: [string, Book] = ['A 123.456', book1];
// catalogLocations[2] = 'some string';
// catalogLocations.forEach(book => console.log(book));
let catalogLocations = ['A 123.456', book1];
//Union Types
let allBooks = util.GetAllBooks();
let allMagazines = util.GetAllMagazines();
let readingMaterial = allMagazines[0];
// PrintTitle(allBooks[0]);
// PrintTitle(allMagazines[0]);
//Intersecction
let sreialNovel = {
    id: 100,
    title: 'The Gradual Tale',
    author: 'Occasional Pen',
    available: true,
    category: enums_1.Category.Fiction,
    publisher: 'Serial Press'
};
//Mixing
applyMixins(classes_1.UniversityLibrarian, [classes_1.Employee, classes_1.Researcher]);
let newLibrarian = new classes_1.UniversityLibrarian();
//This allows us to create a Object with a mix of properties obf both classes
newLibrarian.doResearch('Economics');
//String Literal types
let empCategory = 'Manager';
let empCategory1 = 'Manager';
empCategory = 'Non-Manager';
//Asynchronous Patterns
// function getBooksByCategory(cat: Category, callback: LibManagCallback): void {
//     setTimeout(() => {
//         try {
//             let foundBooks: Array<string> = util.GetBookTitlesByCategory(cat);
//             if (foundBooks.length > 0) {
//                 callback(null, foundBooks);
//             } else {
//                 throw new Error('No books found');
//             }
//         } catch (error) {
//             callback(error, null);
//         }
//     }, 2000);
// }
// function logCategorySearch(err: Error, titles: Array<string>): void {
//     if (err) {
//         console.log(`Error message: ${err.message}`);
//     } else {
//         console.log(`Found the following titles:`);
//         console.log(titles.forEach(book => console.log(book)));
//     }
// }
// console.log('Beginnig search');
// getBooksByCategory(Category.Fiction, logCategorySearch);
// console.log('Search submitted...');
function getBooksByCategory(cat) {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            let foundBooks = util.GetBookTitlesByCategory(cat);
            if (foundBooks.length > 0) {
                resolve(foundBooks);
            }
            else {
                reject('No books found for that categoty.');
            }
        }, 2000);
    });
    return p;
}
console.log('Beginnig search');
getBooksByCategory(enums_1.Category.Fiction)
    .then(titles => {
    console.log(`Found titles: ${titles}`);
    return titles.length;
})
    .then(numofBooks => console.log(`Number of Books Found : ${numofBooks}`))
    .catch(reason => console.log(`Error: ${reason}`));
console.log('Search submitted...');
//# sourceMappingURL=app.js.map