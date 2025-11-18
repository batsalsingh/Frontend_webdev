// Q5 - Person → Student Inheritance using Prototypes

// Parent constructor
function Person(name) {
    this.name = name;
}

// Method added to Person prototype
Person.prototype.showName = function () {
    console.log("Name:", this.name);
};

// Child constructor
function Student(name, branch) {
    Person.call(this, name); // inherit properties
    this.branch = branch;
}

// Inherit Person prototype
Student.prototype = Object.create(Person.prototype);

// Reset constructor reference
Student.prototype.constructor = Student;

// Add Student-specific method
Student.prototype.showBranch = function () {
    console.log("Branch:", this.branch);
};

// Create a student object
const s1 = new Student("Akhi", "Computer Science");

// Calling inherited and own methods
s1.showName();    // From Person prototype
s1.showBranch();  // From Student prototype

// Check prototype chain
console.log(s1.__proto__ === Student.prototype);       // true
console.log(Student.prototype.__proto__ === Person.prototype); // true
