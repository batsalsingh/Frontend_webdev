// Initial object
let user = {
    name: "Akash",
    email: "akash@mail.com",
    age: 21
};

// DOM elements
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const resultDiv = document.getElementById("result");

// Load initial values into form
const loadData = () => {
    nameInput.value = user.name;
    emailInput.value = user.email;
    ageInput.value = user.age;
};

// Show updated object
const showUser = () => {
    resultDiv.textContent = JSON.stringify(user, null, 2);
};

// Update event
document.getElementById("updateBtn").addEventListener("click", () => {
    user.name = nameInput.value;
    user.email = emailInput.value;
    user.age = Number(ageInput.value);

    showUser();
});

// initialize UI
loadData();
showUser();
