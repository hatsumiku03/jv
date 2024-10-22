function getDNInumber(dni) {
    let word = "TRWAGMYFPDXBNJZSQVHLCKET";
    let position = dni % (word.length - 1);
    return alert(word[position]);
}

document.getElementById('calc').addEventListener('click', function() {
    let dni = document.getElementById('dni');
    try{
        let word = getDNInumber(dni.value);
    }catch(err){
        alert('Somenthing went wrong in the code and you didnt get the number of the DNI :(')
    }
}) 