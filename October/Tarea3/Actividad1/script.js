function calcularLetraDni(dni) {
    let cadena = "TRWAGMYFPDXBNJZSQVHLCKET";
    dni = parseInt(dni);
    let posicion = dni % (cadena.length - 1);
    return alert(cadena[posicion]);
}

document.getElementById('calcular').addEventListener('click', function() {
    let dni = document.getElementById('dni');
    let letra = calcularLetraDni(dni.value);
})  