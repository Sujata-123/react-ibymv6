import React, { useState } from 'react';
import Todo1 from './Todoapplication/Todo1';
import TodoListItem from './Todoapplication/TodoListItem';
const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div>
    <div>
      <Todo1
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      </div>
      <TodoListItem todos={todos} setTodos={setTodos}/>
    </div>
  );
};
export default App;
