// Q10 – Async Delivery Pipeline with Random Delays and Failure

// Utility: Returns a promise that resolves/rejects after 1–2 seconds
function asyncStep(stepMessage) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000; // 1–2 sec
        const success = Math.random() < 0.8; // 80% success rate

        setTimeout(() => {
            if (success) {
                resolve(stepMessage);
            } else {
                reject(stepMessage + " ❌ FAILED");
            }
        }, delay);
    });
}

// Individual steps
function takeOrder() {
    return asyncStep("Step 1: Order taken");
}

function prepare() {
    return asyncStep("Step 2: Food prepared");
}

function pack() {
    return asyncStep("Step 3: Package ready");
}

function dispatch() {
    return asyncStep("Step 4: Out for delivery");
}

function deliver() {
    return asyncStep("Delivery completed!");
}

// Main pipeline execution using async/await
async function runPipeline() {
    console.log("Start Pipeline\n");

    try {
        // Await ensures each step runs AFTER the previous one completes.
        // If a step rejects, control jumps directly to the catch block.

        console.log(await takeOrder());
        console.log(await prepare());
        console.log(await pack());
        console.log(await dispatch());
        console.log(await deliver());

        console.log("\nPipeline finished successfully!");

    } catch (error) {
        // Any rejection from above steps lands here
        console.error("\nPipeline failed!");
        console.error("Reason:", error);
    }
}

// Run the simulation
runPipeline();

