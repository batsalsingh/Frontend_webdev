// given number
let x = 16.75;

// perform various math operations
let rounded = Math.round(x);
let squareRoot = Math.sqrt(x);
let cube = Math.pow(x, 3);
let randomNum = Math.floor(Math.random() * 41) + 10; // between 10 and 50

// formatted output using template literals
console.log(`Math Utility Dashboard Results:
Original Number: ${x}
Rounded Value: ${rounded}
Square Root: ${squareRoot.toFixed(2)}
Cube (x³): ${cube.toFixed(2)}
Random Number (10–50): ${randomNum}
`);
