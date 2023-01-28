import { createSlice } from "@reduxjs/toolkit";
import {setDoc, doc, deleteDoc, updateDoc} from "firebase/firestore";
import { db } from "../services/firebase";

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        todos: []
    },
    reducers: {
        setTodosFirestore: (state, action) => {
            state.todos.push(action.payload);
        },
        createTodo: (state, action) => {
            state.todos.push(action.payload);
            setDoc(doc(db, "todos", action.payload.id), {
                task: action.payload.task,
                completed: action.payload.completed
            });
        },
        completeTodo: (state, action) => {
            const currentTodo = state.todos.find(item => item.id === action.payload);
            currentTodo.completed = !currentTodo.completed;
            updateDoc(doc(db, "todos", currentTodo.id), {
               completed: currentTodo.completed 
            });
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(item => item.id !== action.payload);
            deleteDoc(doc(db, "todos", action.payload));
        }
    }
});

export const {
    setTodosFirestore,
    createTodo,
    completeTodo,
    deleteTodo
} = todosSlice.actions;

export default todosSlice.reducer;