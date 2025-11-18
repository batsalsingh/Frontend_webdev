// Q4 – Manage Concurrent Server Responses (Promise.all + Promise.race)

// Utility to simulate async server response with random failure
function simulateServer(name, time) {
    return new Promise((resolve, reject) => {
        const shouldFail = Math.random() < 0.2; // 20% chance of failure

        setTimeout(() => {
            if (shouldFail) {
                reject(`${name} failed during deployment.`);
            } else {
                resolve(`${name} deployment completed in ${time / 1000}s`);
            }
        }, time);
    });
}

// Server A: 2 seconds
const serverA = simulateServer("Server A", 2000);

// Server B: 3 seconds
const serverB = simulateServer("Server B", 3000);

// ---- Promise.all(): Both must complete ----
Promise.all([serverA, serverB])
    .then((results) => {
        console.log("Deployment completed for all servers");
        console.table(results);
    })
    .catch((error) => {
        console.error("❌ Deployment Error (Promise.all):", error);
    });

// ---- Promise.race(): First response wins ----
Promise.race([serverA, serverB])
    .then((winner) => {
        console.log("Fastest response:", winner);
    })
    .catch((error) => {
        console.error("❌ Error in fastest responder (Promise.race):", error);
    });
