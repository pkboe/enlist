import React, { useState, useEffect, useRef } from "react";
import Applicationbar from "./components/Applicationbar.jsx";
import ActionButtons from "./components/ActionButtons.jsx";
import TodoTaskList from "./components/TodoTaskList.jsx";
import AddTodo from "./components/AddTodo.jsx";
import SnackbarComponent from "./components/SnackbarComponent";
import "./App.css";

function App() {
  //refs
  // const ref = useRef();
  //Methods And State Stores
  //States :
  const [addTodoText, setAddTodoText] = useState(0);
  const [Disabled, setDisabled] = useState(true);

  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });
  // const [todos, setTodos] = useState([]); // Works Everywere!
  const [open, setOpen] = React.useState(false);
  const [Message, setMessage] = useState("New Task Added ");
  const [Severity, setSeverity] = useState("info");
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  //Methods :
  const onEditClick = () => {
    console.log("Edit Clicked");
    Disabled ? setDisabled(false) : setDisabled(true);
  };

  const editClickCommit = (id, value) => {
    let tempTodos = todos;
    // tempTodos.splice(id - 1, id - 1, { id: id, value: value });
    // setTodos(tempTodos);
    // console.log("Edit Clicked Commited by ", id, value);
    console.log(tempTodos);
  };

  const handleOnAddButtonClick = () => {
    console.log(todos.some((e) => e.value === addTodoText));
    if (
      addTodoText &&
      !todos.some((e) => e.value.toLowerCase() === addTodoText.toLowerCase())
    ) {
      setTodos([...todos, { value: addTodoText, id: todos.length + 1 }]);
      setMessage("New Task Added ");
      setSeverity("info");
      handleClick();
    } else if (!addTodoText) {
      setMessage("Tasks Are Not Blank!");
      setSeverity("error");
      handleClick();
    } else {
      setMessage("Tasks Already Exists");
      setSeverity("warning");
      handleClick();
    }
  };
  const handleDelete = (event) => {
    setTodos(todos.filter((el) => el.value !== event.value));
    setMessage("Task Deleted");
    setSeverity("warning");
    handleClick();
  };
  // useEffect(() => {
  //   console.log(addTodoText);
  //   return () => {};
  // }, [addTodoText]);
  useEffect(
    () => {
      setAddTodoText("");
      localStorage.setItem("todos", JSON.stringify(todos));
      return () => {};
    },
    [todos],
    [Message],
    [Severity]
  );
  return (
    <div className="App">
      <Applicationbar />
      <AddTodo
        disabled={false}
        onAddButtonClick={() => handleOnAddButtonClick()}
        value={addTodoText}
        onChange={(event) => {
          setAddTodoText(event.target.value);
        }}
      />
      <ActionButtons onEditClick={onEditClick} />
      <TodoTaskList
        todos={todos}
        onDelete={handleDelete}
        disabled={Disabled}
        editClickCommit={editClickCommit}
      />
      <SnackbarComponent
        message={Message}
        handleClick={handleClick}
        handleClose={handleClose}
        open={open}
        severity={Severity}
      />
    </div>
  );
}

export default App;
