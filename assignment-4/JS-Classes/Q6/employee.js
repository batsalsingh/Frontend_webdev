// Employee class with required methods
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += (this.salary * percent / 100);
    }
}

const employees = [];

const outputDiv = document.getElementById("output");
const totalDiv = document.getElementById("total");

// Add employee button handler
document.getElementById("addBtn").addEventListener("click", () => {
    const id = document.getElementById("empId").value;
    const name = document.getElementById("empName").value;
    const dept = document.getElementById("empDept").value;
    const salary = Number(document.getElementById("empSalary").value);
    const bonus = Number(document.getElementById("empBonus").value);

    if (!id || !name || !dept || !salary) {
        alert("Please fill all fields!");
        return;
    }

    // Create employee object
    const emp = new Employee(id, name, dept, salary);

    // apply bonus (if entered)
    emp.applyBonus(bonus);

    employees.push(emp);

    // Show employee details
    outputDiv.innerHTML += `
        <p><strong>${emp.name}</strong> (${emp.department}) — Annual Salary: ₹${emp.getAnnualSalary()}</p>
    `;
});

// Calculate total annual payout using reduce()
document.getElementById("calcBtn").addEventListener("click", () => {
    if (employees.length === 0) {
        totalDiv.textContent = "No employees added yet.";
        return;
    }

    const total = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);

    totalDiv.textContent = "₹" + total;
});
