import React from 'react'
import { useDispatch } from 'react-redux';
import { completeTodo, deleteTodo } from '../../redux/todosSlice';
import "./TodoItem.css";

function TodoItem({id, task, completed}) {

  const dispatch = useDispatch();

  return (
    <li className='todos__item'>
        <label>
            <input type="checkbox" onChange={() => dispatch(completeTodo(id))} />
            <span></span>
        </label>
        <p className={ completed ? "task--completed" : ""}>{task}</p>
        <button onClick={() => dispatch(deleteTodo(id))}>X</button>
    </li>
  );
}

export default TodoItem;