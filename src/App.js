
import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos]= useState([]);
  const [todo, setTodo] = useState('');


  function handleInputChange(e){
   setTodo(e.target.value)  ;
  };

  function handleFormSubmit(e){
    e.preventDefault();

    if(todo !== ''){
      setTodos([...todos, {id: todos.length = 1, task: todo.trim()}])
    }
    setTodo('');
  }
  return (
    <div className="App">
      <div className="todo">
        <ul className="todo-list">
          <li>this is todo item</li>
          {
            todos.map((todo)=>{ return <li key={todo.id}>{todo.task}</li>})
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
