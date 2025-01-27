let isSignUp = false;

function toggleForm() {
    isSignUp = !isSignUp;
    document.getElementById("form-title").innerText = isSignUp ? "Sign Up" : "Login";
    document.getElementById("email").classList.toggle("hidden", !isSignUp);
    document.querySelector(".toggle-link").innerHTML = isSignUp 
        ? "Already have an account? Login" 
        : "Don't have an account? Sign Up";
}

function showForgotPassword() {
    document.getElementById("auth-form").classList.add("hidden");
    document.querySelector(".forgot-password").classList.add("hidden");
    document.querySelector(".toggle-link").classList.add("hidden");
    document.getElementById("forgot-password-form").classList.remove("hidden");
}

function hideForgotPassword() {
    document.getElementById("auth-form").classList.remove("hidden");
    document.querySelector(".forgot-password").classList.remove("hidden");
    document.querySelector(".toggle-link").classList.remove("hidden");
    document.getElementById("forgot-password-form").classList.add("hidden");
}

document.getElementById("auth-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;

    if (isSignUp && email.trim() === "") {
        alert("Please enter your email for sign-up.");
        return;
    }

    alert(isSignUp ? "Sign Up Successful!" : "Login Successful!");
});

document.getElementById("forgot-password-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let resetUsername = document.getElementById("reset-username").value;
    let newPassword = document.getElementById("new-password").value;

    if (newPassword.trim() === "") {
        alert("Please enter a new password.");
        return;
    }

    alert("Password Reset Successful! You can now log in with your new password.");
    hideForgotPassword();
});
