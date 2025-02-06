import { useState } from "react";

export default function AddTask ({onAddTask}) {
    const [text, setText] = useState('');
    return (
        <>
            <input 
                placeholder="Agregar tarea"
                value={text}
                onChange={e => setText(e.target.value)}>
            </input>
            <button onClick={() => {
                setText('')
                onAddTask(text);
            }}>Agregar</button>
        </>
    );
}