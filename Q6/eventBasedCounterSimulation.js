// initial counter value
let count = 0;

// function to increase the counter
function increment() {
  function update() {
    count++;
    console.log("Counter incremented →", count);
  }
  update(); // simulate click
}

// function to decrease the counter
function decrement() {
  function update() {
    count--;
    console.log("Counter decremented →", count);
  }
  update(); // simulate click
}

// simulate click events
increment();
increment();
decrement();
increment();
decrement();
decrement();
