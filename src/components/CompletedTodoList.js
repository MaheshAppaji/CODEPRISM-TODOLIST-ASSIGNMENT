import React from "react";

const CompletedTodoList = (props) => {
  const { completedTodos } = props;

  return (
    <ul className="all-todos">
      {completedTodos.map((item)=>(
      <li className="completed-todo">
        <span className="todo-text" key={item.id}>
          {item.todo}
        </span>
      </li>
      ))}
    </ul>
  );
};

export default CompletedTodoList;
