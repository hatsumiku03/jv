import { useState } from 'react';

export default function TaskList({tasks, onChangeTasks, onDeleteTasks}) {
    return (
        <>
            <ul>
                {tasks.map((task, index) => (
                <li key={task.id}>
                    
                    <Task task={task} 
                    onChange={onChangeTasks}
                    onDelete={onDeleteTasks} 
                    />
                </li>
                ))}
            </ul>
        </>
    );
}

function Task({task, onChange, onDelete}) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if(isEditing){
        taskContent = (
            <>
                <input className='text-black' value={task.text}
                onChange={e => {
                    onChange({...task, text: e.target.value});
            }}/>
                <button onClick={() => setIsEditing(false)}>Guardar</button>
            </>
        )
    }else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>Editar</button>
                <button onClick={() => onDelete(task.id)}>Eliminar</button>
            </>
        );
    }
    return (
        <label>
            <input type='checkbox'
            checked={task.done}
            onChange={e => {
                onChange({...task, done: e.target.checked});
            }} />
            {taskContent}
            <button onClick={() => onDelete(task.id)}>Eliminar</button>
        </label>
    );
}   