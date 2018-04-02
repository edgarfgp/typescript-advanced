import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine, KeyValuePair } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import * as util from './lib/utilityFunctions';

//function PrintBookInfo({title: booktitle, author: bookauthor} : Book): void {
 function PrintBookInfo(item : Book): [string, string] {
    // console.log(`${item.title} was authored by ${item.author}`);
    console.log(`${item.title} was authored by ${item.author}`);
    return [item.title, item.author];
}

function LogFavouriteBooks([book1, book2, ...others]: Array<Book>){
    PrintBookInfo(book1);
    PrintBookInfo(book2);
    others.forEach(book => console.log(book));
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


let schoolBooks: Array<Book> = [
    { id: 1, title: 'The Great Gatsby', author: 'James Royce', available: true, category: Category.Biography },
    { id: 2, title: 'Crime and Punishment', author: 'Ernest Hemingway', available: false, category: Category.Poetry },
    { id: 3, title: 'Clear light of Day ', author: 'Maya Angelou', available: true, category: Category.Biography }
];

let booksRead : Array<Book> = util.GetAllBooks();
//Spread operator
booksRead.push(...schoolBooks);
// booksRead.forEach(book => console.log(book));

let poets:Array<string> = ['Shelley', 'Collins', 'hughes'];
let authors: string [] = ['Tolstoy', 'Fitzgerald', ...poets];
//authors.forEach(book => console.log(book));

//Tuples
let booksPrinted:[string,string] = PrintBookInfo(book1)
//console.log(booksPrinted);
//the fileds types must be the same
// let catalogLocations: [string, Book] = ['A 123.456', book1];
// catalogLocations[2] = 'some string';
// catalogLocations.forEach(book => console.log(book));
let catalogLocations : KeyValuePair<string, Book> = ['A 123.456', book1];



