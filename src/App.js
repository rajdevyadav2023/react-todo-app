
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState('');

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  function handleInputChange(e) {
    setTodo(e.target.value);
  };

  function handleFormSubmit(e) {
    e.preventDefault();

    if (todo !== '') {
      setTodos([...todos, { id: todos.length + 1, task: todo.trim() }])
    }
    setTodo('');
  }

  function handleDelete(id) {
    const removeTodo = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(removeTodo);
    console.log(removeTodo)
  }
  return (
    <div className="App">
      <div className="todo">
        <ul className="todo-list">
          <h2>Have A Great Day!</h2>
          {
            todos.map((todo) => { return <li key={todo.id}>{todo.task} <button onClick={() => { handleDelete(todo.id) }}>Delete</button> </li> })
          }
        </ul>
        <form className="todo-form" onSubmit={handleFormSubmit}>
          <p>React Todo App By Rajdev Yadav</p>
          <div className="form-control">
            <input type="text" value={todo} placeholder='Enter Task Here & Press Enter To Add' onChange={handleInputChange} />

          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
