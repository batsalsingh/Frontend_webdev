// Q1 – Async Coffee Maker using Promises

// Utility: simulate async delay + random failure
function simulateAsyncStep(stepName) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000; // 1–2 sec

        setTimeout(() => {
            // 20% chance of failure
            if (Math.random() < 0.2) {
                reject(`${stepName} failed!`);
            } else {
                console.log(`${stepName} completed.`);
                resolve();
            }
        }, delay);
    });
}

// Step 1: Boil water
function boilWater() {
    return simulateAsyncStep("Boiling water");
}

// Step 2: Brew coffee
function brewCoffee() {
    return simulateAsyncStep("Brewing coffee");
}

// Step 3: Pour into cup
function pourCoffee() {
    return simulateAsyncStep("Pouring coffee");
}

// Main Process using Promise chaining
boilWater()
    .then(brewCoffee)
    .then(pourCoffee)
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.error("❌ Coffee preparation error:", error);
    });
