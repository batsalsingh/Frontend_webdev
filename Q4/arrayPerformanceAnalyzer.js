// create an array of 8 random scores between 30 and 100
let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

// find highest and lowest scores
let highest = Math.max(...scores);
let lowest = Math.min(...scores);

// calculate average using reduce()
let average = scores.reduce((sum, val) => sum + val, 0) / scores.length;

// count how many students passed (score >= 50)
let passed = scores.filter(score => score >= 50).length;

// formatted summary
console.log(`Student Performance Summary:
Scores: ${scores.join(", ")}
Highest Score: ${highest}
Lowest Score: ${lowest}
Average Score: ${average.toFixed(2)}
Students Passed: ${passed} / ${scores.length}
`);
