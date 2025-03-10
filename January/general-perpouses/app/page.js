import {useReducer} from 'react'
import AddTask from './AddTask';
import TaskList from './TaskList';

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(
    taskReducer,
    initialTasks
  )

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    })
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    })
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    })
  }

  return (
    <>
      <h1> Lista de Tareas</h1>
      <AddTask
        onAddTask={handleAddTask}
      />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

function taskReducer(tasks, action)  {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false,
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      })
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('uknow action: ' + action.type)
    }
  }
}

let nextId=3;
const initialTasks = [
  {id:0, text: 'Estudiar React para el examen', done: true},
  {id:1, text: 'Hacer el examen', done: false},
  {id:2, text: 'Aprobar el examen', done: false}
];
