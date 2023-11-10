document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value === "admin" ? alert("NO") : alert("YES") ;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password-input').value;

    var newUser = {
        username: username,
        email: email,
        password: password,
        isLoggedIn: 'true',
    };

    var users = JSON.parse(localStorage.getItem('users')) || [];

    var userExists = users.some(function(user) {
        return user.username === newUser.username || user.email === newUser.email;
    });

    if (userExists) {
        alert('Пользователь с таким именем или почтой уже существует!');
        return;
    }

    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));
    alert('Регистрация успешна!');
    window.location.href='index.html';
});

addEventListener("DOMContentLoaded", (event) => {
    const password = document.getElementById("password-input");
    const passwordAlert = document.getElementById("password-alert");
    const requirements = document.querySelectorAll(".requirements");
    const leng = document.querySelector(".leng");
    const bigLetter = document.querySelector(".big-letter");
    const num = document.querySelector(".num");
    const specialChar = document.querySelector(".special-char");

    requirements.forEach((element) => element.classList.add("wrong"));

    password.addEventListener("focus", () => {
        passwordAlert.classList.remove("d-none");
        if (!password.classList.contains("is-valid")) {
            password.classList.add("is-invalid");
        }
    });

    password.addEventListener("input", () => {
        const value = password.value;
        const isLengthValid = value.length >= 8;
        const hasUpperCase = /[A-Z]/.test(value);
        const hasNumber = /\d/.test(value);
        const hasSpecialChar = /[!@#$%^&*()\[\]{}\\|;:'",<.>/?`~]/.test(value);

        leng.classList.toggle("good", isLengthValid);
        leng.classList.toggle("wrong", !isLengthValid);
        bigLetter.classList.toggle("good", hasUpperCase);
        bigLetter.classList.toggle("wrong", !hasUpperCase);
        num.classList.toggle("good", hasNumber);
        num.classList.toggle("wrong", !hasNumber);
        specialChar.classList.toggle("good", hasSpecialChar);
        specialChar.classList.toggle("wrong", !hasSpecialChar);

        const isPasswordValid = isLengthValid && hasUpperCase && hasNumber && hasSpecialChar;

        if (isPasswordValid) {
            password.classList.remove("is-invalid");
            password.classList.add("is-valid");

            requirements.forEach((element) => {
                element.classList.remove("wrong");
                element.classList.add("good");
            });
        } else {
            password.classList.remove("is-valid");
            password.classList.add("is-invalid");
        }
    });

    password.addEventListener("blur", () => {
        passwordAlert.classList.add("d-none");
    });
});