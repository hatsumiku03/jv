document.addEventListener('DOMContentLoaded', (e) => {
    const image= document.getElementById('god');
    const colorText = document.getElementById('colorKey');
    const bgColor = document.getElementById('backgroundKey');
    const message = document.getElementById('messageKey');
    const reset = document.getElementById('resetKey');

    function TextColorChange(){
        document.body.style.color = '#b5a63b';
    }
    
    function BackgroundColorChange(){
        document.body.style.backgroundColor = '#8520ad';
    }
    
    function MessageShow(){
        alert('Pepe duro');
    }
    
    function Reset(){
        document.body.style.color = '';
        document.body.style.backgroundColor = '';
    }
    
    function dragListener(e){
        e.preventDefault();
    }
    
    function dropItem(e){
        e.preventDefault(); 
        let item = e.target.id;
        if(item === 'colorKey'){
            TextColorChange();
        }else if (item === 'backgroundKey'){
            BackgroundColorChange();
        }else if (item === 'messageKey'){
            MessageShow();
        }else if (item === 'resetKey'){
            Reset();
        }    
    }
    
    [colorText, bgColor, message, reset].forEach((ki) => {
        ki.addEventListener('dragover', dragListener);
        ki.addEventListener('drop', dropItem);
    });
});

