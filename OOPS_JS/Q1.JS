class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    const total = this.marks.reduce((sum, mark) => sum + mark, 0);
    return total / this.marks.length;
  }

  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 90) return 'A';
    else if (avg >= 75) return 'B';
    else if (avg >= 50) return 'C';
    else return 'F';
  }

  printResult() {
    console.log(`Name: ${this.name}`);
    console.log(`Marks: ${this.marks.join(', ')}`);
    console.log(`Average: ${this.calculateAverage().toFixed(2)}`);
    console.log(`Grade: ${this.getGrade()}`);
    console.log('------------------------');
  }
}

// 🧪 Testing with 3 students
const student1 = new Student('Alice', [95, 88, 92, 85]);
const student2 = new Student('Bob', [70, 65, 80, 75]);
const student3 = new Student('Charlie', [45, 50, 40, 35]);

student1.printResult();
student2.printResult();
student3.printResult();