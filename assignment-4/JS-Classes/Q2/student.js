// Arrow function for field validation
const validateField = (input, regex, errorElement, message) => {
    if (!regex.test(input.value)) {
        input.classList.add("invalid");
        input.classList.remove("valid");
        errorElement.textContent = message;
        return false;
    } else {
        input.classList.remove("invalid");
        input.classList.add("valid");
        errorElement.textContent = "";
        return true;
    }
};

document.getElementById("submitBtn").addEventListener("click", () => {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");

    const nameErr = document.getElementById("nameError");
    const emailErr = document.getElementById("emailError");
    const phoneErr = document.getElementById("phoneError");
    const passErr = document.getElementById("passError");
    const finalMsg = document.getElementById("finalMsg");

    // Regular Expressions
    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/;
    const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

    // Validate each field
    const validName = validateField(name, nameRegex, nameErr, "Name must contain only alphabets");
    const validEmail = validateField(email, emailRegex, emailErr, "Enter a valid email format");
    const validPhone = validateField(phone, phoneRegex, phoneErr, "Phone must be exactly 10 digits");
    const validPass = validateField(password, passRegex, passErr, "Password must contain 1 uppercase, 1 number & 1 special char");

    // Final message
    if (validName && validEmail && validPhone && validPass) {
        finalMsg.textContent = "All fields are valid!";
        finalMsg.className = "success";
    } else {
        finalMsg.textContent = "Please fix the errors above.";
        finalMsg.className = "error";
    }
});
