const btn = document.getElementById("dropdownBtn");
const menu = document.getElementById("dropdownMenu");

// Toggle dropdown on button click
btn.addEventListener("click", () => {
  menu.style.display =
    menu.style.display === "block" ? "none" : "block";
});

// Update button text when an option is clicked
menu.querySelectorAll(".option").forEach(option => {
  option.addEventListener("click", (e) => {
    btn.textContent = e.target.textContent;
    menu.style.display = "none";
  });
});

// Close dropdown when clicking outside (CAPTURING PHASE)
document.addEventListener(
  "click",
  (event) => {
    if (!btn.contains(event.target) && !menu.contains(event.target)) {
      menu.style.display = "none";
    }
  },
  true // <-- capturing phase
);
