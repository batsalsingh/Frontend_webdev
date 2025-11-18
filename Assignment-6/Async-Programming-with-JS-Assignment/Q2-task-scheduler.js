// Q2 – Demonstrate Task Order (Microtask vs. Macrotask)

// 1. Log start of program
console.log("Start");

// 2. Macrotask: setTimeout callback
setTimeout(() => {
    console.log("Macrotask: setTimeout callback");
}, 0);

// 3. Microtask: Promise.then callback
Promise.resolve().then(() => {
    console.log("Microtask: Promise.then callback");
});

// 4. Synchronous log
console.log("Synchronous log");

// 5. Log end of program
console.log("End");
