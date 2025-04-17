document.addEventListener("DOMContentLoaded", function () {
    // Login Form
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;
            alert(`Login Attempt: ${email}`);
        });
    }

    // Signup Form
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("signup-name").value;
            const email = document.getElementById("signup-email").value;
            alert(`Sign Up Attempt: ${name} (${email})`);
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        const forgotPasswordForm = document.getElementById("forgot-password-form");
    
        if (forgotPasswordForm) {
            forgotPasswordForm.addEventListener("submit", function (e) {
                e.preventDefault();
                const email = document.getElementById("reset-email").value;
                alert(`Password reset link sent to: ${email}`);
            });
        }
    });
    
});
