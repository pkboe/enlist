import React from "react";

import TodoTask from "./TodoTask.jsx";
import "./TodoTaskList.css";
const TodoTaskList = (props) => {
  return (
    <div className="Todo-Task-List">
      {props.todos.map((todo, i) => {
        return (
          <TodoTask
            value={todo.value}
            todo={todo}
            key={todo.id}
            onDelete={props.onDelete}
            disabled={props.disabled}
            editClickCommit={props.editClickCommit}
          />
        );
      })}
    </div>
  );
};
export default TodoTaskList;
