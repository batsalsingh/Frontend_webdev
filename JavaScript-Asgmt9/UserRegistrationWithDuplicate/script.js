const form = document.getElementById("reg-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");
const msgBox = document.getElementById("msg-box");

const API_URL = "http://localhost:3000/users";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  resetMessage();
  setLoading(true);

  try {
    const checkRes = await axios.get(API_URL, {
      params: { email: email },
    });

    if (checkRes.data.length > 0) {
      showMessage("Email already registered.", "error");
    } else {
      await registerUser(name, email);
    }
  } catch (error) {
    showMessage("Network error. Please try again.", "error");
    console.error(error);
  } finally {
    setLoading(false);
  }
});

async function registerUser(name, email) {
  try {
    await axios.post(API_URL, {
      name: name,
      email: email,
    });
    showMessage("Registration successful!", "success");
    form.reset();
  } catch (error) {
    showMessage("Registration failed.", "error");
  }
}

function showMessage(text, type) {
  msgBox.textContent = text;
  msgBox.className = `message ${type}`;
  msgBox.style.display = "block";
}

function resetMessage() {
  msgBox.style.display = "none";
  msgBox.className = "message";
}

function setLoading(isLoading) {
  submitBtn.disabled = isLoading;
  submitBtn.textContent = isLoading ? "Checking..." : "Register";
}
