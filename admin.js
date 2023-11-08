// Эта функция вызывается при загрузке страницы
function displayUsers() {
    const usersList = document.getElementById('usersList');
    usersList.innerHTML = ''; // Очистка списка перед перерисовкой

    // Получаем массив пользователей из localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    users.forEach((user, index) => {
        // Создаем элементы для отображения информации пользователя
        let userDiv = document.createElement('div');
        userDiv.innerHTML = `
            <p>Username: <input type="text" value="${user.username}" id="username${index}"></p>
            <p>Email: <input type="email" value="${user.email}" id="email${index}"></p>
            <p>Password: <input type="text" value="${user.password}" id="password${index}"></p>
            <p>Password: <input type="text" value="${user.isLoggedIn}" id="passwor${index}"></p>
            <button onclick="editUser(${index})">Сохранить</button>
            <button onclick="deleteUser(${index})">Удалить</button>
        `;
        usersList.appendChild(userDiv);
    });
}

// Функция для редактирования пользователя
function editUser(index) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let username = document.getElementById(`username${index}`).value;
    let email = document.getElementById(`email${index}`).value;
    let password = document.getElementById(`password${index}`).value;

    users[index] = { username, email, password };
    localStorage.setItem('users', JSON.stringify(users));
    displayUsers(); // Обновляем список пользователей
}

// Функция для удаления пользователя
function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(index, 1); // Удаляем пользователя из массива
    localStorage.setItem('users', JSON.stringify(users));
    displayUsers(); // Обновляем список пользователей
}

// Вызываем displayUsers при загрузке страницы
window.onload = displayUsers;
