import { useState } from "react";
import Todo from "./Todo/Todo";
import TodoForm from "./TodoForm/TodoForm";

function TodoList() {

  const [todos, setTodos] = useState([]);


  function onAddTask(userInput, userInput2, userInput3) {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36),
        task: userInput,
        // task: userInput2,
        // task: userInput3,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  }

  function onDelete(id) {
    setTodos([...todos.filter((currentValue, index, arr) => currentValue.id !== id)]);
  }

  function onToggle(id) {
    setTodos([...todos.map((currentValue, index, arr) => currentValue.id === id ? {...currentValue, complete: !currentValue.complete} : {...currentValue})]);
  }

  return ( 
    <div>
      <TodoForm onAddTask={onAddTask}/>
      {todos.map((currentValue, index, arr) => {
        return(
          <Todo key={currentValue.id} currentValue={currentValue} onToggle={onToggle} onDelete={onDelete}/>
        );
      })}
    </div>
  );
}

export default TodoList;