import React, { useState } from "react";

import TodoForm from "./components/TodoForm";
import "./App.css";
import TodoList from "./components/TodoList";
import CompletedTodoList from "./components/CompletedTodoList";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]); // Todo List
  const [completedTodos, setCompleteTodo] = useState([]); // completed Todo List

  // delete function

  const handleDelete = (id) => {
    const delTodo = todos.filter((eachTodo) => eachTodo.id !== id);
    console.log(delTodo);
    setTodos([...delTodo]);
  };

  // complete function

  const handleComplete = (id) => {
    const addCompletedTodo = todos.find((eachTodo) => eachTodo.id === id);
    setCompleteTodo([addCompletedTodo, ...completedTodos]);

    const filterTodo = todos.filter((eachTodo) => eachTodo.id !== id); // to remove completed todo from TodoList
    setTodos(filterTodo);
    console.log(completedTodos);
  };

  // On Submit Function

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo !== "") {
      setTodos([
        ...todos,

        {
          id: `ID: ${todo.toUpperCase()} - ${Date.now()}`,
          todo,
        },
      ]);

      setTodo("");
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Todo List App</h1>
        <TodoForm handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} />
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
          completedTodos={completedTodos}
        />
        {/* Second Half of the screen  */}
        <h3>Completed Todos</h3>
        <CompletedTodoList completedTodos={completedTodos} />

        {/*  to know ID of eachTodo{
          todos.map((eachTodo)=>(
            <p>{eachTodo.id}</p>
          ))
        } */}
      </div>
    </div>
  );
};

export default App;
