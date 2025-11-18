// Q7 – Promise.allSettled() Practice

// Utility to simulate random rejection
function maybeReject(result) {
    return Math.random() < 0.3   // 30% chance to fail
        ? Promise.reject(result + " ❌ FAILED")
        : Promise.resolve(result + " ✅ SUCCESS");
}

// Provided async loaders
function loadProfile() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("Profile Loaded"), 2000)
    );
}

function loadPosts() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("Posts Loaded"), 1500)
    );
}

function loadMessages() {
    return new Promise((resolve) =>
        setTimeout(() => resolve("Messages Loaded"), 1000)
    );
}

// Main execution
async function loadDashboard() {
    const start = Date.now();
    console.log("Loading dashboard modules...\n");

    const promises = [
        loadProfile().then(maybeReject),
        loadPosts().then(maybeReject),
        loadMessages().then(maybeReject)
    ];

    const results = await Promise.allSettled(promises);

    console.log("---- RESULTS ----");

    results.forEach((result, index) => {
        const moduleName = ["Profile", "Posts", "Messages"][index];

        if (result.status === "fulfilled") {
            console.log(`${moduleName}: ${result.value}`);
        } else {
            console.log(`${moduleName}: ${result.reason}`);
        }
    });

    const end = Date.now();
    console.log("\nTotal time:", (end - start) / 1000, "seconds");
}

loadDashboard();
