import { Category } from './enums';

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;
}

interface LibManagCallback {
    (err: Error, title: Array<string>): void;
}

interface DamageLogger {
    (reason: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

interface Magazine {
    title: string;
    publisher: string;
}

interface KeyValuePair<K, V> extends Array<K | V> {
    0: K;
    1: V;
}

export { Book, DamageLogger as Logger, Author, Librarian, Magazine, KeyValuePair, LibManagCallback };