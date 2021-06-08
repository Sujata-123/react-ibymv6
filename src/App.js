import React, { useState } from 'react';
import Todo1 from './Todoapplication/Todo1';
import TodoListItem from './Todoapplication/TodoListItem';
const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div>
      <div>
        <Todo1
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
        />
      </div>
      <TodoListItem
        todos={todos}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
      />
    </div>
  );
};
export default App;
