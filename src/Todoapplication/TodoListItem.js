import React from 'react';
const TodoListItem = ({ todos, setTodos }) => {
  const handleComplete = todo => {
    setTodos(
      todos.map(item => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTod = todos.find(todos => todo.id == id);
    setEditTodo(findTod);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  return (
    <div>
      {todos.map(todo => {
        <li key={todo.id}>
          <input
            type="text"
            value={todo.title}
            onChange={event => event.preventDefault()}
          />
          <div>
            <button onClick={() => handleComplete(todo)}>Complete</button>

            <button onClick={() => handleEdit(todo)}>Edit</button>
            <button onClick={() => handleDelete(todo)}>Delete</button>
          </div>
        </li>;
      })}
    </div>
  );
};
export default TodoListItem;
