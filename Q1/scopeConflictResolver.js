// Global variable declaration
let bonus = 5000;  // Global scope: accessible throughout the program

// Function to calculate total salary
function calculateSalary(isPermanent) {
    // Local variable declaration
    let salary = 40000; // Local to this function only

    // Add bonus only if employee is permanent
    if (isPermanent) {
        salary += bonus;  // Using global 'bonus' variable
        console.log("✅ Employee is permanent.");
    } else {
        console.log("⚠️ Employee is not permanent, no bonus added.");
    }

    // Display the calculated total salary
    console.log("💰 Total Salary:", salary);
}

// Demonstration of scope behavior
console.log("Global bonus before function call:", bonus);

calculateSalary(true);   // Case 1: Permanent employee
calculateSalary(false);  // Case 2: Non-permanent employee

// Check if global variable 'bonus' is affected
console.log("Global bonus after function calls:", bonus);
