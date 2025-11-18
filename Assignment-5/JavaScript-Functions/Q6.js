// Q6 - Prototype chain: Person → Faculty → Professor

// ------------------------
// Level 1: Person
// ------------------------
function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log("Name:", this.name);
};


// ------------------------
// Level 2: Faculty (inherits Person)
// ------------------------
function Faculty(name, department) {
    Person.call(this, name);   // inherit Person's properties
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function () {
    console.log("Department:", this.department);
};


// ------------------------
// Level 3: Professor (inherits Faculty)
// ------------------------
function Professor(name, department, subject) {
    Faculty.call(this, name, department);   // inherit Faculty's properties
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function () {
    console.log("Subject:", this.subject);
};


// ------------------------
// Create Professor object
// ------------------------
const p1 = new Professor("Akhi", "Computer Science", "Machine Learning");

// Professor methods
p1.showSubject();      // From Professor
// Faculty methods
p1.showDepartment();   // From Faculty
// Person methods
p1.showName();         // From Person


// ------------------------
// Demonstrate prototype chain
// ------------------------
console.log(p1.__proto__ === Professor.prototype);           // true
console.log(Professor.prototype.__proto__ === Faculty.prototype); // true
console.log(Faculty.prototype.__proto__ === Person.prototype);    // true
