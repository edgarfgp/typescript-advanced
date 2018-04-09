import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine, KeyValuePair, LibManagCallback } from './interfaces';
import { UniversityLibrarian, ReferenceItem, Employee, Researcher } from './classes';
import * as util from './lib/utilityFunctions';

//function PrintBookInfo({title: booktitle, author: bookauthor} : Book): void {
function PrintBookInfo(item: Book): [string, string] {
    // console.log(`${item.title} was authored by ${item.author}`);
    console.log(`${item.title} was authored by ${item.author}`);
    return [item.title, item.author];
}

function LogFavouriteBooks([book1, book2, ...others]: Array<Book>) {
    PrintBookInfo(book1);
    PrintBookInfo(book2);
    others.forEach(book => console.log(book));
}

function PrintTitle(item: Book | Magazine): void {
    console.log(item.title);
}


/**
*This Method allow us to create a new class wich is a mix of two classes
*/
function applyMixins(deriverCto: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtors => {
        Object.getOwnPropertyNames(baseCtors.prototype).forEach(name => {
            deriverCto.prototype[name] = baseCtors.prototype[name];
        });
    });
}

function GetMagazineByFrecuency(preferredFrecuency: Frecuency) {

}

type PrintMaterial = Book | Magazine;
type Serial = Book & Magazine;

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


let schoolBooks: Array<Book> = [
    { id: 1, title: 'The Great Gatsby', author: 'James Royce', available: true, category: Category.Biography },
    { id: 2, title: 'Crime and Punishment', author: 'Ernest Hemingway', available: false, category: Category.Poetry },
    { id: 3, title: 'Clear light of Day ', author: 'Maya Angelou', available: true, category: Category.Biography }
];

let booksRead: Array<Book> = util.GetAllBooks();
//Spread operator
booksRead.push(...schoolBooks);
// booksRead.forEach(book => console.log(book));

let poets: Array<string> = ['Shelley', 'Collins', 'hughes'];
let authors: string[] = ['Tolstoy', 'Fitzgerald', ...poets];
//authors.forEach(book => console.log(book));

//Tuples
let booksPrinted: [string, string] = PrintBookInfo(book1)
//console.log(booksPrinted);
//the fileds types must be the same
// let catalogLocations: [string, Book] = ['A 123.456', book1];
// catalogLocations[2] = 'some string';
// catalogLocations.forEach(book => console.log(book));
let catalogLocations: KeyValuePair<string, Book> = ['A 123.456', book1];


//Union Types
let allBooks: Array<Book> = util.GetAllBooks();
let allMagazines: Array<Magazine> = util.GetAllMagazines();

let readingMaterial: PrintMaterial = allMagazines[0];

// PrintTitle(allBooks[0]);
// PrintTitle(allMagazines[0]);


//Intersecction
let sreialNovel: Serial = {
    id: 100,
    title: 'The Gradual Tale',
    author: 'Occasional Pen',
    available: true,
    category: Category.Fiction,
    publisher: 'Serial Press'
}


//Mixing
applyMixins(UniversityLibrarian, [Employee, Researcher]);
let newLibrarian = new UniversityLibrarian();
//This allows us to create a Object with a mix of properties obf both classes
newLibrarian.doResearch('Economics');


//String Literal types

let empCategory: 'Manager' | 'Non-Manager' = 'Manager';

//Type Aliases

type Frecuency = 'Manager' | 'Non-Manager';

let empCategory1: Frecuency = 'Manager';
empCategory = 'Non-Manager';


//Asynchronous Patterns

function getBooksByCategory(cat: Category, callback: LibManagCallback): void {

    setTimeout(() => {
        try {
            let foundBooks: Array<string> = util.GetBookTitlesByCategory(cat);

            if (foundBooks.length > 0) {
                callback(null, foundBooks);

            } else {
                throw new Error('No books found');
            }
        } catch (error) {
            callback(error, null);
        }
    }, 2000);
}

function logCategorySearch(err: Error, titles: Array<string>): void {
    if (err) {
        console.log(`Error message: ${err.message}`);
    } else {
        console.log(`Found the following titles:`);
        console.log(titles.forEach(book => console.log(book)));
    }
}

console.log('Beginnig search');

getBooksByCategory(Category.Fiction, logCategorySearch);
console.log('Search submitted...');







