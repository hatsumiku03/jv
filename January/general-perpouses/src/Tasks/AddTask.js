import { useState } from 'react';

export default function AddTask(onAddTask) {
    const [text, setText] = useState('');

    return (
        <>
            <input type="text" 
                value={text} 
                placeholder="Agrega una tarea..." 
                onChange={e => setText(e.target.value)}
                className='text-black'>
            </input>
            <button className='bg-blue-500 text-white rounded-md'
            onClick={() => {
                setText('') 
                onAddTask(text);
            }}>
                Agregar
            </button>
        </>
    );

}