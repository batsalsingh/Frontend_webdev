// Q2 - applyOperation using callbacks

// Higher-order function that applies an operation to each element
function applyOperation(numbers, operation) {
    const result = [];

    for (let num of numbers) {
        result.push(operation(num)); // apply callback to each number
    }

    return result;
}

// Callback: double the number
function double(num) {
    return num * 2;
}

// Callback: square the number
function square(num) {
    return num * num;
}

// Test data
const nums = [1, 2, 3, 4];

// Applying operations
const doubledResult = applyOperation(nums, double);
const squaredResult = applyOperation(nums, square);

// Output
console.log("Doubled:", doubledResult);
console.log("Squared:", squaredResult);
