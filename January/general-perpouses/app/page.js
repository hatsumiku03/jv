"use client"
import {useReducer} from 'react';
import AddTask from '@/src/Tasks/AddTask';
import TaskList from '@/src/Tasks/TaskList';

export default function App() {

const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

function handleAddTask(text){
  dispatch({
    type: 'added',
    id: nextId++,
    text: text,
  })
}

function handleChangeTask(taskId){
    dispatch({
    type:'changed',
    task: taskId,
    })
}

function handleDeleteTask(taskId){
  dispatch({
    type: 'deleted',
    task: taskId,
  });
}
  return(
    <>
    <h1 className='text-5xl'>Lista de tareas</h1>
      <AddTask
      onAddTask={handleAddTask}/>
      
      <TaskList tasks={tasks} 
      onChangeTasks={handleChangeTask}
      onDeleteTasks={handleDeleteTask}
      />
    </>
  );
}

function taskReducer(tasks, action){
  switch(action.type){
    case 'added': {
      return [...tasks, {
        id: action.id,
        text:action.text,
        done: false,
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if(t.id === action.task){
          return action.task;
        }else{
          return t;
        }

      })
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.task);
    }
    default:
      throw new Error('Unknown action: ' + action.type);
  }
}


let nextId=3;
const initialTasks = [
  {id: 1, text: 'Supardo', done: false},
  {id: 2, text: 'pipip', done: true},
  {id: 3, text: 'Mad Dog', done: true},

];