import React from "react";

const TodoForm = (props) => {
  const { todo, setTodo, handleSubmit} = props;

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        key={todo.id}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
