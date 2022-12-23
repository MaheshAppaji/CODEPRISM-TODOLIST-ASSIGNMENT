import React from "react";

const TodoList = (props) => {
  const { todos, handleDelete, handleComplete } = props;

  return (
    <ul className="all-todos">
      {todos.map((eachTodo) => (
        <li className="single-todo">
          <span className="todo-text" key={eachTodo.id}>
            {eachTodo.todo}
          </span>
          <button onClick={() => handleComplete(eachTodo.id)}>Complete</button>
          <button onClick={() => handleDelete(eachTodo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
