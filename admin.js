function displayUsers() {
    const usersList = document.getElementById('usersList');
    usersList.innerHTML = '';

    let users = JSON.parse(localStorage.getItem('users')) || [];

    users.forEach((user, index) => {
        let userRow = document.createElement('div');
        userRow.className = 'row user-row';
        userRow.setAttribute('data-index', index);

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
        let userHr =document.createElement('hr');
        userHr.style.width = '1120px';
        userHr.style.right = '20px';
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

        userRow.appendChild(userNameCol);
        userRow.appendChild(userEmailCol);
        userRow.appendChild(userPasswordCol);
        userRow.appendChild(editIcon);
        userRow.appendChild(buttonsCol);
        userRow.appendChild(userHr);

        usersList.appendChild(userRow);
    });

    function toggleEdit(index) {
        let editMode = document.getElementById(`username${index}`).style.display === 'none';

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

function editUser(index) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let username = document.getElementById(`username${index}`).value;
    let email = document.getElementById(`email${index}`).value;
    let password = document.getElementById(`password${index}`).value;

    users[index] = { username, email, password };
    localStorage.setItem('users', JSON.stringify(users));
    displayUsers();
}

function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    displayUsers();
}

window.onload = displayUsers;
