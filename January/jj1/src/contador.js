    import React, { useState } from 'react';  

    function Counter  () {  
    const [count, setCount] = useState(0);  

    const increment = () => setCount(count + 1);  
    const decrement = () => setCount(count - 1);  

    return (  
        <div>  
            <h2>Count: {count}</h2>  
                <button onClick={increment}>Subele papa</button>  
                <button onClick={decrement}>AY NONONO, BAJALE, ERA MENTIRA</button>  
        </div>  
    );  
    };  

    export default Counter