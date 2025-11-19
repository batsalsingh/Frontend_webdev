// Base class: Employee
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    console.log(`${this.name} works in the ${this.department} department.`);
  }
}

// Derived class: Manager
class Manager extends Employee {
  constructor(name, department) {
    super(name, department);
  }

  // Overriding the work method
  work() {
    console.log(`${this.name} manages the ${this.department} department and oversees team operations.`);
  }
}

// 🧪 Demonstrating Runtime Polymorphism
const emp1 = new Employee('Ravi', 'Sales');
const emp2 = new Manager('Anita', 'Marketing');

// Array of base class type
const employees = [emp1, emp2];

// Polymorphic behavior
employees.forEach(emp => {
  emp.work(); 
});