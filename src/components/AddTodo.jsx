import React from "react";
import { TextField, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import "./AddTodo.css";
const AddTodo = (props) => {
  // const useStyles = makeStyles((theme) => ({
  //   textField: {
  //     textAlign: "center",
  //     display: "flex",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     width: "100%",
  //     "& > *": {},
  //   },
  // }));

  // const classes = makeStyles();
  return (
    <div className={"add-todo"}>
      <TextField
        className={"textField"}
        id={props.id}
        placeholder="Enter Your task"
        variant="outlined"
        disabled={props.disabled}
        value={props.value}
        onChange={props.onChange}
        ref={props.ref}
      />
      <Fab
        color="primary"
        aria-label="add"
        style={{ backgroundColor: "#4b5bb9" }}
        onClick={props.onAddButtonClick}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default AddTodo;
