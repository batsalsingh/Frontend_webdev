// Q8 – Async Retry Mechanism for Order Processing

// API that fails 50% of the time
function submitOrder() {
    return new Promise((resolve, reject) => {
        const success = Math.random() < 0.5;  // 50% chances

        setTimeout(() => {
            if (success) {
                resolve("Order submitted successfully!");
            } else {
                reject("Order submission failed!");
            }
        }, 1000);
    });
}

// Main retry logic (tries up to 3 times)
async function processOrder() {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const result = await submitOrder();
            console.log(`Attempt ${attempt}: Success → ${result}`);
            return;   // Stop after successful attempt
        } catch (error) {
            console.log(`Attempt ${attempt}: Failed → ${error}`);
        }
    }

    // All 3 attempts failed → throw final error
    throw new Error("Order could not be processed");
}

// Run the process with graceful handling
(async () => {
    try {
        await processOrder();
        console.log("Final Status: Order completed");
    } catch (err) {
        console.error("Final Status:", err.message);
    }
})();
