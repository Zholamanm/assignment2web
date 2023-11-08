function updateHeader() {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let loggedInUser = users.find(user => user.isLoggedIn === true); // Используйте find вместо forEach для нахождения первого вошедшего пользователя
    console.log(loggedInUser);
    if (loggedInUser) {
        document.getElementById('username').textContent = loggedInUser.username;
        document.getElementById('userItem').style.display = 'block';
        document.getElementById('logoutItem').style.display = 'block';
        document.getElementById('loginItem').style.display = 'none';
        document.getElementById('regItem').style.display = 'none';
    } else {
        // Логика для случая, когда никто не вошел в систему
        document.getElementById('username').textContent = '';
        document.getElementById('userItem').style.display = 'none';
        document.getElementById('logoutItem').style.display = 'none';
        document.getElementById('loginItem').style.display = 'block';
        document.getElementById('regItem').style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', updateHeader);

document.getElementById('logout').addEventListener('click', function() {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.forEach(user => {
        if (user.isLoggedIn === true) {
            user.isLoggedIn = false;
        }
    });

    localStorage.setItem('users', JSON.stringify(users)); // Не забудьте сохранить изменения в localStorage

    // Обновить интерфейс и перезагрузить страницу
    updateHeader();
    window.location.reload();
});
