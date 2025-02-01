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
                <input value={task.text}
                onChange={e => {onChange(task.id, e.target.value)}}/>
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
        )
    }
    return (
        <>
            <input type='checkbox'
            checked={task.done}
            onChange={e => {onChange({ ...task, done: e.target.checked })}}>
            </input>
            {taskContent}
            <button onClick={() => onDelete(task.id)}>Eliminar</button>
        </>
    )
}