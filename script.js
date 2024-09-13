document.addEventListener("DOMContentLoaded", function () {
    // Registration form validation
    const form = document.querySelector("form");
    const nameField = document.getElementById("userNameRegister");
    const emailField = document.getElementById("userEmail");
    const passwordField = document.getElementById("pwdRegister");
    const confirmPasswordField = document.getElementById("confirmPwd");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o envio do formulário até que a validação seja concluída

        let valid = true;

        // Validação do nome (verifica se o nome não está vazio)
        if (nameField.value.trim() === "" || nameField.value === "Insira seu nome") {
            alert("Please enter your full name.");
            valid = false;
        }

        // Validação do e-mail
        if (!validateEmail(emailField.value)) {
            alert("Please enter a valid email.");
            valid = false;
        }

        // Validação da senha (mínimo de 6 caracteres)
        if (passwordField.value.length < 6) {
            alert("Password must be at least 6 characters long.");
            valid = false;
        }

        // Confirmação da senha (deve ser igual à senha)
        if (passwordField.value !== confirmPasswordField.value) {
            alert("Passwords do not match.");
            valid = false;
        }

        // Se todos os campos forem válidos, permite o envio do formulário
        if (valid) {
            alert("Form successfully submitted!");
            form.submit(); // Envia o formulário
        }
    });

    // Função para validar o formato do e-mail
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }

    // Login form validation
    const loginForm = document.getElementById("loginForm");
    const loginNameField = document.getElementById("userName");
    const loginPasswordField = document.getElementById("pwd");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the form from submitting until validation is done

        let validLogin = true;

        // Validate username (check if not empty)
        if (loginNameField.value.trim() === "" || loginNameField.value === "Insira seu nome") {
            alert("Please enter your username.");
            validLogin = false;
        }

        // Validate password (check if not empty)
        if (loginPasswordField.value.trim() === "") {
            alert("Please enter your password.");
            validLogin = false;
        }

        // If both fields are valid, allow form submission
        if (validLogin) {
            alert("Login successful!");
            loginForm.submit(); // Submits the form
            window.location.href = "docs/main-page/main.html"
        }
    });
});