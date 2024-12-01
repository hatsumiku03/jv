let userArray = [];

function getUsersValues(e){
    e.preventDefault();

    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let dni = document.getElementById('dni').value;
    let phone = document.getElementById('phone').value;
    let observation = document.getElementById('observation').value;

    let userData = {
        name,
        surname,
        dni,
        phone,
        observation
    }

    userArray.push(userData);
    showUsers();
}

function showUsers(){
    let display = document.getElementById('users');
    display.innerHTML = '';

    userArray.forEach((value, id) => {
        let individualUser = document.createElement('div');
        individualUser.innerHTML = `
            <p>Nombre: ${value.name}</p>
            <p>Apellidos: ${value.surname}</p>
            <p>DNI: ${value.dni}</p>
            <p>Teléfono: ${value.phone}</p>
            <p>Observaciones: ${value.observation}</p>
            <button onclick="deleteUser(${id})">Eliminar</button><hr>`;

    display.appendChild(individualUser);
    });
}

function deleteUser(id){
    userArray.splice(id, 1);
    showUsers();
}