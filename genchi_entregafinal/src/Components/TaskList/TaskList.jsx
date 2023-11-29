import React, { useEffect, useState } from 'react'
import './TaskList.css'
import TaskForm from '../TaskForm/TaskForm';
import TaskItem from '../TaskItem/TaskItem';
export default function TaskList() {
    const [list, setList] = useState(() => {
        const savedTasks = localStorage.getItem('task');
        if(savedTasks){
            return JSON.parse(savedTasks);
        }else {
            return[];
        }
    });

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        localStorage.setItem('task', JSON.stringify(list));
    }, [list]);

    function handleChange(e){
        setInputValue(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        setList([...list, inputValue]);
        setInputValue('');
    }

    function handleDelete(index){
        const newItems = [...list];
        newItems.splice(index, 1);
        setList(newItems);
    }

  return (
    <div id='taskList'>
        <h1>Lista de Tareas</h1>
        <h4>¿Qué vas a hacer hoy?</h4>
        <div id="formulario">
            <TaskForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                inputValue={inputValue}
            />
            <ul>
                {list.map((item, index) => (
                    <TaskItem
                        key={item}
                        item={item}
                        handleDelete={() => handleDelete(index)}
                    />
                ))}
            </ul>
        </div>
    </div>
  )
}
