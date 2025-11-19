const loggerBox = document.getElementById("loggerBox");
const cx = document.getElementById("cx");
const cy = document.getElementById("cy");
const dotsLayer = document.getElementById("dotsLayer");
const clearBtn = document.getElementById("clearDots");

// Update coordinates
loggerBox.addEventListener("mousemove", (e) => {
  cx.textContent = e.clientX;
  cy.textContent = e.clientY;
});

// Reset coords when mouse leaves
loggerBox.addEventListener("mouseleave", () => {
  cx.textContent = "-";
  cy.textContent = "-";
});

// Add red dot on double-click
loggerBox.addEventListener("dblclick", (e) => {
  const rect = loggerBox.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;

  dotsLayer.appendChild(dot);
});

// Clear dots
clearBtn.addEventListener("click", () => {
  dotsLayer.innerHTML = "";
});
