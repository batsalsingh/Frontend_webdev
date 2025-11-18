// Q3 – Convert callback-based bug fetcher into a Promise-based version

// Modern Promise-based API
function getBugs() {
    return new Promise((resolve, reject) => {
        const shouldFail = Math.random() < 0.3;  // 30% chance of failure

        setTimeout(() => {
            if (shouldFail) {
                reject("API Error: Failed to fetch bugs.");
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

// Using the Promise
getBugs()
    .then((bugs) => {
        console.log("Fetched Bugs:");
        console.table(bugs);    // Display bugs nicely
    })
    .catch((error) => {
        console.error("❌ Error:", error);
    });
