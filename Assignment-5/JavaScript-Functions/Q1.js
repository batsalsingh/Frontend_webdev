// Q1 - Callback Demonstration

// Function that will run after greeting
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Main function that accepts a callback
function greetUser(name, callback) {
    console.log(`Hello ${name}`);

    // Execute the callback after greeting
    if (typeof callback === "function") {
        callback();
    } else {
        console.log("Callback is not a function");
    }
}

// Test the function
greetUser("Akhi", showEndMessage);
