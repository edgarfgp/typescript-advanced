"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    addToSchedule() {
        console.log("Employee added to shedule.");
    }
    logTitle() {
        console.log(`Employee has the title ${this.title}`);
    }
}
exports.Employee = Employee;
class Researcher {
    doResearch(topic) {
        console.log(`Doing research on ${topic}`);
    }
}
exports.Researcher = Researcher;
class UniversityLibrarian {
    assistCustomer(custName) {
        console.log(this.name + ' is assisting ' + custName);
    }
}
exports.UniversityLibrarian = UniversityLibrarian;
class ReferenceItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating a new ReferenceItem...');
    }
    printItem() {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department: ${ReferenceItem.department}`);
    }
    get publisher() {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }
}
ReferenceItem.department = 'Research';
exports.ReferenceItem = ReferenceItem;
//# sourceMappingURL=classes.js.map