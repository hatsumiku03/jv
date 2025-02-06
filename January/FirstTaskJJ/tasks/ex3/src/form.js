    import React, { useState } from 'react';  

    function Form  () {  
    const [word, setWord] = useState("");  

    return (  
        <div>  
            <h2>Formulario chistoso:</h2>  
            <form>
                <input type="text" value={word} onChange={e => setWord(e.target.value)} />  
                <p>HOLA QUE TAL, SABÍAS QUE {word}</p>
            </form>
            
        </div>  
    );  
    };  

    export default Form