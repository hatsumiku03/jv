function getDNInumber(dni) {
    let word = "TRWAGMYFPDXBNJZSQVHLCKET";
    let position = dni % (word.length - 1);
    
    if(dni >= 0 && dni < 100000000){
        return alert(word[position]);
    }else{
        return alert('That isnt a valid DNI');
    }
}

document.getElementById('calc').addEventListener('click', function() {
    try{
        let dni = document.getElementById('dni');
        let word = getDNInumber(dni.value);
    }catch(err){ // I know, aquí podía utilizar un InputMismathError creo que era para que de error al poner numeros, pero me dio pereza ponerlo a la que me di cuenta que ya lo acabe y no puse el try catch XD
        alert('Somenthing went wrong in the code and you didnt get the number of the DNI :(');
    }
}) 