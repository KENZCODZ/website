document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop default submission

        // Get entered values
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        //credentials
        const validUsername = "admin";
        const validPassword = "admin";

        if (username === validUsername && password === validPassword) {
            // Redirect to admin page
            window.location.href = "adminAlertHistory.html";
        } else {
            // Show error message below form
            errorMessage.textContent = "⚠️ Invalid username or password. Please try again.";
            errorMessage.style.color = "red";

            // Show pop-up notification
            alert("Incorrect username or password!");
        }
    });
});
