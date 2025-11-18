// Q9 - Person → Student using ES6 classes + comparison with prototype version

// -----------------------------------------------------
// (A) PROTOTYPE VERSION (Old Style)
// -----------------------------------------------------

function PersonProto(name) {
    this.name = name;
}

PersonProto.prototype.showName = function () {
    console.log("Name:", this.name);
};

function StudentProto(name, branch) {
    PersonProto.call(this, name);
    this.branch = branch;
}

StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;

StudentProto.prototype.showBranch = function () {
    console.log("Branch:", this.branch);
};

const protoStudent = new StudentProto("Akhi", "CSE");
protoStudent.showName();
protoStudent.showBranch();


// -----------------------------------------------------
// (B) ES6 CLASS VERSION (Modern Style)
// -----------------------------------------------------

class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name:", this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);     // Calls Person constructor
        this.branch = branch;
    }

    showBranch() {
        console.log("Branch:", this.branch);
    }
}

const classStudent = new Student("Akhi", "CSE");
classStudent.showName();
classStudent.showBranch();


// -----------------------------------------------------
// Demonstrating both work the same way
// -----------------------------------------------------

console.log(
    protoStudent.__proto__.__proto__ === PersonProto.prototype
); // true

console.log(
    classStudent.__proto__.__proto__ === Person.prototype
); // true
