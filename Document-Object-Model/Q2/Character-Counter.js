const textBox = document.getElementById("textBox");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");

const MAX = 100;

// Handle typing
textBox.addEventListener("input", () => {
    const remaining = MAX - textBox.value.length;
    updateCounter(remaining);
});

// Prevent typing when reaching 0
textBox.addEventListener("keydown", (e) => {
    if (textBox.value.length >= MAX && e.key !== "Backspace" && e.key !== "Delete") {
        e.preventDefault();
    }
});

// Update counter colors
function updateCounter(remaining) {
    counter.textContent = `${remaining} characters remaining`;

    if (remaining <= 0) {
        counter.style.color = "red";
    } else if (remaining <= 20) {
        counter.style.color = "goldenrod";
    } else {
        counter.style.color = "black";
    }
}

// Reset button
resetBtn.addEventListener("click", () => {
    textBox.value = "";
    updateCounter(MAX);
});
