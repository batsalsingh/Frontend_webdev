// Q7 - makeMultiplier using closures

// Function that returns another function
function makeMultiplier(multiplier) {
    // Inner function forms a closure
    return function (num) {
        return num * multiplier; 
    };
}

// Example
const triple = makeMultiplier(3);
console.log(triple(5)); // 15
