// Q9 – Predicting Event Loop Order

/*
PREDICTED OUTPUT ORDER (Before Running):

1. Script start      // synchronous
2. Script end        // synchronous
3. Promise callback  // microtask
4. Timeout callback  // macrotask

Reason:
- Synchronous code runs first.
- Then microtasks (Promise.then).
- Then macrotasks (setTimeout).
*/

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

/*
ACTUAL OUTPUT (After Running):

Script start
Script end
Promise callback
Timeout callback

Explanation:
------------
1. The JS engine runs all synchronous statements first.
   → "Script start"
   → "Script end"

2. Then the Event Loop processes the microtask queue next.
   Promise callbacks go into the microtask queue.
   → "Promise callback"

3. Finally, the macrotask queue runs.
   setTimeout callbacks are macrotasks.
   → "Timeout callback"

Thus microtasks ALWAYS run before macrotasks,
even if the timeout is set to 0 ms.
*/
