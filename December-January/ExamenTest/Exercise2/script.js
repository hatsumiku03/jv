let colorText = document.getElementById('colorKey');
let backgroundColor = document.getElementById('backgroundKey');
let message= document.getElementById('messageKey');
let reset = document.getElementById('resetKey');

function dragItem(e){
    e.preventDefault();
}

function dropItem(e){
    e.preventDefault();
    item = e.target.id;
    if(item === 'colorKey'){
        document.body.style.color ='red';

    }else if(item === 'backgroundKey'){
        document.body.style.backgroundColor = 'blue';

    }else if(item === 'messageKey'){
        alert('Message');

    }else if(item === 'resetKey'){
        document.body.style.color = '';
        document.body.style.backgroundColor = '';
    }
}

    [colorText, backgroundColor, message, reset].forEach((ki) =>{
        ki.addEventListener('dragover', dragItem);
        ki.addEventListener('drop', dropItem);
    });