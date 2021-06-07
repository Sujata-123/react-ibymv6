import React from 'react';
import {v4 as uuidv4} from 'uuid';
const Todo1 = ({input,setInput,todos,setTodos}) => {
  const onInputChange=()=>{
    setInput(event.target.value);
  }
  const onTodo1Submit=(event)=>{
    event.preventDefault();
    setTodos([...todos,{id:uuidv4(),title:input,completed:false}]);
    setInput("");
  }
  return (
    <form onSubmit={onTodo1Submit}>
      <input type="text" placeholder="Enter Todo" 
      value={input}
      required
      onChange={onInputChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};
export default Todo1;
