// Helper function for validation (arrow function)
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

document.getElementById("bookBtn").addEventListener("click", () => {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const seats = document.getElementById("seats");

    const nameErr = document.getElementById("nameErr");
    const emailErr = document.getElementById("emailErr");
    const seatsErr = document.getElementById("seatsErr");

    const ticketDiv = document.getElementById("ticket");

    // Regular Expressions
    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    const seatsRegex = /^([1-9]|10)$/;   // 1 to 10 only

    // Validate fields
    const validName = validateField(name, nameRegex, nameErr, "Name must contain only alphabets");
    const validEmail = validateField(email, emailRegex, emailErr, "Invalid email format");
    const validSeats = validateField(seats, seatsRegex, seatsErr, "Seats must be between 1 and 10");

    // If any field invalid → stop
    if (!validName || !validEmail || !validSeats) {
        ticketDiv.innerHTML = "";
        return;
    }

    // Booking object
    const booking = {
        name: name.value,
        email: email.value,
        seats: seats.value
    };

    // Show ticket details
    ticketDiv.innerHTML = `
        <p class="success">
            <strong>Ticket Booked Successfully!</strong><br><br>
            Name: ${booking.name}<br>
            Email: ${booking.email}<br>
            Seats: ${booking.seats}
        </p>
    `;
});
