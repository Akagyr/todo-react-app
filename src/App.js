import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CreateTodoModal from "./components/modal/CreateTodoModal";
import TodoItem from "./components/TodoItem/TodoItem";
import { setTodosFirestore } from "./redux/todosSlice";
import { query, collection, onSnapshot } from "firebase/firestore";
import { db } from "./services/firebase";

function App() {

  const [isShowModal, setIsShowModal] = useState(false);
  const dispatch = useDispatch();
  const {todos} = useSelector(state => state.todosSlice);

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach(doc => {
        dispatch(setTodosFirestore({ ...doc.data(), id: doc.id }));
      });
    });
    return () => unsubscribe();
  }, []);
  
  const showTodos = todos.map(todo => <TodoItem key={todo.id} id={todo.id} task={todo.task} completed={todo.completed} />);

  return (
    <div>
      { isShowModal && <CreateTodoModal isShowModal={setIsShowModal} countTodos={todos.length} /> }
      <div className="container">
        <h1 className="welcome-title">Todo List</h1>
        <div className="todos">
          <ul className="todos__items">
            {showTodos}
          </ul>
          <p className="todos__count">You have {todos.length} todos</p>
        </div>
        <button className="addNewTodoBtn" onClick={() => setIsShowModal(true)}>Add new todo</button>
      </div>
    </div>
  );
}

export default App;
