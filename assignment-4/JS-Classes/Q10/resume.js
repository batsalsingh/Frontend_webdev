// Reusable validation function
const validate = (input, regex, errorElement, message) => {
    if (!regex.test(input.value)) {
        input.classList.add("invalid");
        input.classList.remove("valid");
        errorElement.textContent = message;
        return false;
    }
    input.classList.remove("invalid");
    input.classList.add("valid");
    errorElement.textContent = "";
    return true;
};

document.getElementById("buildBtn").addEventListener("click", () => {

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const skills = document.getElementById("skills");
    const github = document.getElementById("github");
    const linkedin = document.getElementById("linkedin");

    const nameErr = document.getElementById("nameErr");
    const emailErr = document.getElementById("emailErr");
    const skillsErr = document.getElementById("skillsErr");
    const gitErr = document.getElementById("gitErr");
    const linkErr = document.getElementById("linkErr");

    const outputDiv = document.getElementById("output");

    // RegExp Rules
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    const linkRegex = /^https:\/\//;

    // Validate each field
    const validName = name.value.trim() !== "" ? true : (nameErr.textContent = "Name is required", false);
    const validEmail = validate(email, emailRegex, emailErr, "Enter a valid email");
    const validSkills = skills.value.trim() !== "" ? true : (skillsErr.textContent = "Enter at least one skill", false);
    const validGit = validate(github, linkRegex, gitErr, "GitHub must start with https://");
    const validLinked = validate(linkedin, linkRegex, linkErr, "LinkedIn must start with https://");

    if (!validName || !validEmail || !validSkills || !validGit || !validLinked) {
        outputDiv.textContent = "";
        return;
    }

    // Build resume object
    const resume = {
        name: name.value,
        email: email.value,
        skills: skills.value.split(",").map(s => s.trim()),
        github: github.value,
        linkedin: linkedin.value
    };

    // Display JSON output
    outputDiv.textContent = JSON.stringify(resume, null, 2);
});
