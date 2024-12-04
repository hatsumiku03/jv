let userArray  = [];

function getUsersValues(e){
    e.preventDefault();

    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let dni = document.getElementById('dni').value;
    let phone = document.getElementById('phone').value;
    let observation = document.getElementById('observation').value;

    let user = {
        name,
        surname,
        dni,
        phone,
        observation
    };
    userArray.push(user);
    showUsers();
}

function showUsers(){
    display = document.getElementById('users');
    display.innerHTML = '';
    
    userArray.forEach((value, key) => {
        userDiv = document.createElement('div');
        userDiv.innerHTML = `
        <ul>
            <li>Nombre: ${value.name}</li>
            <li>Apellidos: ${value.surname}</li>
            <li>DNI: ${value.dni}</li>
            <li>Teléfono: ${value.phone}</li>
            <li>Observaciones: ${value.observation}</li>
            <button onclick="deleteUser(${key})">Borrar</button>
        </ul>
        `;
        display.appendChild(userDiv);
    });
}

function deleteUser($id){
    userArray.splice($id, 1);
    showUsers();
}