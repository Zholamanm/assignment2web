function validateForm() {
    if (isUserEmpty() && isVaidateEmail() && isVaidatePassword()) {
        window.location.href = "catalog.html";
    }
}



function isUserEmpty() {
    document.getElementcById('error-message-user').innerHTML = "";
    var username = document.getElementById('username').value;
    if (username == null || username == "") {
        document.getElementById('error-message-user').innerHTML = "Username is empty";
        return false;
    }
    else {
        return true
    }
}

function isEmailRegx(email) {
    var regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
    return regex.test(email);
}

function isVaidateEmail() {
    document.getElementById('error-message-email').innerHTML = "";
    var email = document.getElementById('email').value;
    if (email == null || email == "") {
        document.getElementById('error-message-email').innerHTML = "Email is empty";
        return false;
    } else if (!isEmailRegx(email)) {
        document.getElementById('error-message-email').innerHTML = "Invalid email address";
        return false;
    }
    else {
        return true;
    }
}
function isPasswordRegx(password) {
    var regex = new RegExp(/^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/);
    return regex.test(password);
}

function isVaidatePassword() {
    document.getElementById('error-message-password').innerHTML = "";
    var password = document.getElementById('password').value;
    if (password == null || password == "") {
        document.getElementById('error-message-password').innerHTML = "Password is empty";
        return false;
    } else if (!isPasswordRegx(password)) {
        document.getElementById('error-message-password').innerHTML = "Invalid Password";
        return false;
    }
    else {
        return true
    }
}
function loginUser() {
    // Retrieve user input
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password-input').value;

    var storedData = localStorage.getItem('user');
    var userData = JSON.parse(storedData);
    console.log(userData.email);
    console.log(userData.password);
    console.log(userData.username);
    if (userData) {
        if (username === userData.username && email === userData.email && password === userData.password) {
            alert('Login successful!');
            window.location.href = 'index.html';
            localStorage.setItem('isLoggedIn', 'true');
        } else {
            alert('Неправильное имя пользователя или пароль!');
        }
    } else {
        alert('Нет зарегистрированных пользователей.');
    }
}

