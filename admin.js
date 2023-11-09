// Эта функция вызывается при загрузке страницы
function displayUsers() {
    const usersList = document.getElementById('usersList');
    usersList.innerHTML = ''; // Очистка списка перед перерисовкой

    // Получаем массив пользователей из localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // users.forEach((user, index) => {
    //     // Создаем элементы для отображения информации пользователя
    //     let userDiv = document.createElement('div');
    //     // userDiv.innerHTML = `
    //     //     <p>Username: <input type="text" value="${user.username}" id="username${index}"></p>
    //     //     <p>Email: <input type="email" value="${user.email}" id="email${index}"></p>
    //     //     <p>Password: <input type="text" value="${user.password}" id="password${index}"></p>
    //     //     <p>Password: <input type="text" value="${user.isLoggedIn}" id="passwor${index}"></p>
    //     //     <button onclick="editUser(${index})">Сохранить</button>
    //     //     <button onclick="deleteUser(${index})">Удалить</button>
    //     // `;
    //     userDiv.innerHTML='  ' +
    //         '<div class="col-sm-4" style="padding: 10px;">' +
    //         user.username+ '' +
    //         '</div>' +
    //         '<div class="col-sm-4" style="padding: 10px;">' +
    //         user.email+'' +
    //         '</div>' +
    //         '<div class="col-sm-4" style="padding: 10px;">' +
    //         user.password+ '' +
    //         '</div>';
    //
    //     usersList.appendChild(userDiv);
    // });
    // users.forEach((user, index) => {
    //     // Создаем строку для пользователя
    //     let userRow = document.createElement('div');
    //     userRow.className = 'row';
    //
    //     // Столбец для имени пользователя
    //     let userNameCol = document.createElement('div');
    //     userNameCol.className = 'col-sm-4';
    //     userNameCol.style.padding = '10px';
    //     userNameCol.textContent = user.username;
    //
    //     // Столбец для электронной почты пользователя
    //     let userEmailCol = document.createElement('div');
    //     userEmailCol.className = 'col-sm-4';
    //     userEmailCol.style.padding = '10px';
    //     userEmailCol.textContent = user.email;
    //
    //     // Столбец для пароля пользователя
    //     let userPasswordCol = document.createElement('div');
    //     userPasswordCol.className = 'col-sm-4';
    //     userPasswordCol.style.padding = '10px';
    //     userPasswordCol.textContent = user.password;
    //
    //     // Добавляем столбцы в строку
    //     userRow.appendChild(userNameCol);
    //     userRow.appendChild(userEmailCol);
    //     userRow.appendChild(userPasswordCol);
    //
    //     // Добавляем кнопки редактирования и удаления
    //     let buttonsCol = document.createElement('div');
    //     buttonsCol.className = 'col-sm-12';
    //     buttonsCol.innerHTML = `
    //     <button onclick="editUser(${index})" class="btn btn-primary">Сохранить</button>
    //     <button onclick="deleteUser(${index})" class="btn btn-danger">Удалить</button>
    // `;
    //
    //     // Добавляем кнопки к строке пользователя
    //     userRow.appendChild(buttonsCol);
    //
    //     // Добавляем строку пользователя в список пользователей
    //     usersList.appendChild(userRow);
    // });
    users.forEach((user, index) => {
        let userRow = document.createElement('div');
        userRow.className = 'row user-row';
        userRow.setAttribute('data-index', index);

        // Столбцы с информацией пользователя, которые изначально видимы
        // Используйте span для отображения информации, чтобы легко переключаться между режимами просмотра и редактирования
        let userNameCol = document.createElement('div');
        userNameCol.className = 'col-sm-4';
        userNameCol.innerHTML = `<span id="username-span${index}">${user.username}</span>
                              <input type="text" id="username${index}" value="${user.username}" style="display:none;">`;

        let userEmailCol = document.createElement('div');
        userEmailCol.className = 'col-sm-4';
        userEmailCol.innerHTML = `<span id="email-span${index}">${user.email}</span>
                              <input type="email" id="email${index}" value="${user.email}" style="display:none;">`;

        let userPasswordCol = document.createElement('div');
        userPasswordCol.className = 'col-sm-4';
        userPasswordCol.innerHTML = `<span id="password-span${index}">${user.password}</span>
                                  <input type="password" id="password${index}" value="${user.password}" style="display:none;">`;

        // Создаем иконку карандаша для редактирования
        let editIcon = document.createElement('i');
        editIcon.className = 'bi bi-pen';
        editIcon.style.cursor = 'pointer';
        editIcon.onclick = function() { toggleEdit(index); };

        let buttonsCol = document.createElement('div');
        buttonsCol.className = 'col-sm-12';
        buttonsCol.innerHTML = `
        <button onclick="editUser(${index})" class="btn btn-primary" style="display: none" id="edit${index}">Сохранить</button>
        <button onclick="deleteUser(${index})" class="btn btn-danger" style="display: none" id="delete${index}">Удалить</button>
    `;

        // Добавляем элементы в строку
        userRow.appendChild(userNameCol);
        userRow.appendChild(userEmailCol);
        userRow.appendChild(userPasswordCol);
        userRow.appendChild(editIcon);
        userRow.appendChild(buttonsCol);

        // Добавляем строку в список пользователей
        usersList.appendChild(userRow);
    });

// Функция переключения режима редактирования
    function toggleEdit(index) {
        let editMode = document.getElementById(`username${index}`).style.display === 'none';

        // Переключаем видимость span и input
        document.getElementById(`username-span${index}`).style.display = editMode ? 'none' : 'inline';
        document.getElementById(`email-span${index}`).style.display = editMode ? 'none' : 'inline';
        document.getElementById(`password-span${index}`).style.display = editMode ? 'none' : 'inline';
        document.getElementById(`username${index}`).style.display = editMode ? 'inline' : 'none';
        document.getElementById(`email${index}`).style.display = editMode ? 'inline' : 'none';
        document.getElementById(`password${index}`).style.display = editMode ? 'inline' : 'none';
        document.getElementById(`edit${index}`).style.display = editMode ? 'inline' : 'none';
        document.getElementById(`delete${index}`).style.display = editMode ? 'inline' : 'none';
    }
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
