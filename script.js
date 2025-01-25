document.addEventListener("DOMContentLoaded", function () {
    // Form Selection
    const form = document.getElementById("registration-form");
    
    // Feedback Division Selection
    const feedbackDiv = document.getElementById("form-feedback");

    // Add Event Listener for Form Submission
    form.addEventListener("submit", function (event) {
        // Prevent form from submitting to the server
        event.preventDefault();

        // Retrieve User Inputs and trim whitespace
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validation Logic
        let isValid = true; // Track overall validation status
        const messages = []; // Store validation error messages

        // Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email Validation
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Feedback Display Logic
        feedbackDiv.style.display = "block"; // Make feedback visible

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Success color (green)
        } else {
            feedbackDiv.innerHTML = messages.join("<br>"); // Display error messages
            feedbackDiv.style.color = "#dc3545"; // Error color (red)
        }
    });
});
