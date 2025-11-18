// Q5 – Callback Hell → Async/Await Refactor

// Utility function: simulate async delay for each stage (1 second)
function asyncStep(stepName, callback) {
    setTimeout(() => {
        console.log(stepName);
        callback && callback();
    }, 1000);
}


// 1. CALLBACK HELL IMPLEMENTATION

function runPipelineWithCallbacks() {
    console.log("Starting pipeline (Callback Hell)...");

    asyncStep("Designing UI", () => {
        asyncStep("Building UI", () => {
            asyncStep("Testing UI", () => {
                asyncStep("Deploying UI", () => {
                    asyncStep("Celebration! 🎉", () => {
                        console.log("Pipeline finished (Callback Hell)\n");
                    });
                });
            });
        });
    });
}


// 2. ASYNC/AWAIT IMPLEMENTATION

function asyncStepPromise(stepName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(stepName);
            resolve();
        }, 1000);
    });
}

async function runPipelineAsync() {
    console.log("Starting pipeline (Async/Await)...");

    await asyncStepPromise("Designing UI");
    await asyncStepPromise("Building UI");
    await asyncStepPromise("Testing UI");
    await asyncStepPromise("Deploying UI");
    await asyncStepPromise("Celebration! 🎉");

    console.log("Pipeline finished (Async/Await)\n");
}


// RUN BOTH VERSIONS

runPipelineWithCallbacks();

setTimeout(() => {
    runPipelineAsync();
}, 7000); // delay to avoid interleaving logs
