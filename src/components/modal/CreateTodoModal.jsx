import React from 'react';
import { useForm } from 'react-hook-form';
import "./CreateTodoModal.css";
import { createTodo } from '../../redux/todosSlice';
import { useDispatch } from 'react-redux';

function CreateTodoModal({isShowModal, countTodos}) {

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(createTodo({
      id: String(countTodos + 1),
      task: data.task,
      completed: false
    }));
    isShowModal(false);
  }

  return (
    <div className="modal">
      <div className="modal__body">
        <div className="modal__header"> 
          <h2>Create new todo</h2>
          <button className="header__btn" onClick={() => isShowModal(false)}>x</button>
        </div>
        <div className="modal__content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("task", {
                required: "Please enter your task!",
                minLength: 1 
              })}
              type="text"
              placeholder="Input todo task"  />
            <button type="submit">Create todo</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTodoModal;