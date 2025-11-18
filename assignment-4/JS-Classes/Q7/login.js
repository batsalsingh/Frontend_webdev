// Reusable validator function
const validate = (input, regex, errorElement, message) => {
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

document.getElementById("loginBtn").addEventListener("click", () => {
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const userErr = document.getElementById("userErr");
    const passErr = document.getElementById("passErr");
    const finalMsg = document.getElementById("finalMsg");

    // RegExp Rules
    const usernameRegex = /^.{5,}$/;  
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validate fields
    const validUser = validate(username, usernameRegex, userErr, 
        "Username must be at least 5 characters");

    const validPass = validate(password, passwordRegex, passErr,
        "Password must be 8+ chars, include uppercase, lowercase, number, and special char");

    // Final check
    if (validUser && validPass) {
        finalMsg.textContent = "Login Successful!";
        finalMsg.className = "success";
    } else {
        finalMsg.textContent = "Please fix the errors above.";
        finalMsg.className = "error";
    }
});
