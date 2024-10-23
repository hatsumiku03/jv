function getDNInumber(dni) {
    let word = "TRWAGMYFPDXBNJZSQVHLCKET";
    let position = dni % (word.length - 1);
    if(word[position] !== undefined){
        return alert(dni + word[position]);
    }
}

document.getElementById('calc').addEventListener('click', function() {
        let dni = document.getElementById('dni');
        onlyNumbers(dni);
        let word = getDNInumber(dni.value);
}) 

function onlyNumbers(dni){
    try{
        if (isNaN(dni.value)) {
            throw new InputMismatchError('Input is not a number');
        } 
    }catch(err){
                return alert('That isn\'t a valid DNI');
        }
    }
