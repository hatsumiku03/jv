function calcularLetraDni(dni) {
    let letter = "TRWAGMYFPDXBNJZSQVHLCKET";
    dni = parseInt(dni);
    let position = dni % (letter.length - 1);
    return alert(letter[position]);
}

document.getElementById('calcular').addEventListener('click', function() {
    let dni = document.getElementById('dni');
    let letra = calcularLetraDni(dni.value);
})  