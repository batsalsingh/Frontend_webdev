// array to store numbers 1–30
let numbers = [];
for (let i = 1; i <= 30; i++) {
  numbers.push(i);
}

// array to store classification results
let results = [];

// analyze each number
for (let num of numbers) {
  if (num % 3 === 0 && num % 5 === 0) {
    results.push("FizzBuzz");
  } else if (num % 2 === 0) {
    results.push("Even");
  } else {
    results.push("Odd");
  }
}

// display results
console.log("Odd–Even Number Analyzer Results:");
numbers.forEach((n, i) => {
  console.log(`${n}: ${results[i]}`);
});
