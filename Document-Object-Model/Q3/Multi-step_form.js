const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const summaryStep = document.getElementById("summaryStep");

// Inputs
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

// Errors
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Summary values
const sumName = document.getElementById("sumName");
const sumEmail = document.getElementById("sumEmail");
const sumPassword = document.getElementById("sumPassword");

// Show step 1 initially
step1.style.display = "block";

// Step 1 → Step 2
document.getElementById("next1").addEventListener("click", () => {
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    return;
  }
  nameError.textContent = ""; 

  step1.style.display = "none";
  step2.style.display = "block";
});

// Step 2 Back
document.getElementById("back2").addEventListener("click", () => {
  step2.style.display = "none";
  step1.style.display = "block";
});

// Step 2 → Step 3
document.getElementById("next2").addEventListener("click", () => {
  const emailVal = emailInput.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(emailVal)) {
    emailError.textContent = "Enter a valid email";
    return;
  }
  emailError.textContent = "";

  step2.style.display = "none";
  step3.style.display = "block";
});

// Step 3 Back
document.getElementById("back3").addEventListener("click", () => {
  step3.style.display = "none";
  step2.style.display = "block";
});

// Finish → Show Summary
document.getElementById("finishBtn").addEventListener("click", () => {
  if (passwordInput.value.trim().length < 4) {
    passwordError.textContent = "Password must be 4+ characters";
    return;
  }
  passwordError.textContent = "";

  // Fill summary
  sumName.textContent = nameInput.value;
  sumEmail.textContent = emailInput.value;
  sumPassword.textContent = passwordInput.value;

  step3.style.display = "none";
  summaryStep.style.display = "block";
});

// Restart form
document.getElementById("restartBtn").addEventListener("click", () => {
  summaryStep.style.display = "none";
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  step1.style.display = "block";
});
