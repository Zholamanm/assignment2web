function validateForm() {
    if (isUserEmpty() && isVaidateEmail() && isVaidatePassword()) {
        window.location.href = "catalog.html";
    }
}



function isUserEmpty() {
    document.getElementById('error-message-user').innerHTML = "";
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


const addToCartButtons = document.querySelectorAll(".btn-primary");
addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    const basketLink = document.querySelector(".nav-item.busket .nav-link");
    basketLink.textContent = "🔴Корзина";
  });
});
