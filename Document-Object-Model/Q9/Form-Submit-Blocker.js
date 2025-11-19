const form = document.getElementById("myForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const successMsg = document.getElementById("successMsg");

// Validate on submit
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent submission

  let valid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    valid = false;
  }

  // Email validation
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required";
    valid = false;
  } else if (!emailInput.value.includes("@")) {
    emailError.textContent = "Email must contain @";
    valid = false;
  }

  // Password validation
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    valid = false;
  }

  // If valid → show success message
  if (valid) {
    successMsg.textContent = "Form Submitted Successfully!";
    form.reset();
  }
});

// Live error removal
nameInput.addEventListener("input", () => nameError.textContent = "");
emailInput.addEventListener("input", () => emailError.textContent = "");
passwordInput.addEventListener("input", () => passwordError.textContent = "");
