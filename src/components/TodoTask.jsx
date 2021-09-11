import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Fade from "@material-ui/core/Fade";
import "./Todotask.css";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: "60%",
    },
    TodoTask: {},
  },
}));

export default function TodoTask(props) {
  const classes = useStyles();
  const [tempValue, setTempValue] = useState(props.value);

  useEffect(() => {
    props.editClickCommit(props.todo.id, props.value);
  }, [tempValue, props]);

  return (
    <Fade in={true}>
      <div id={props.id} className={classes.root}>
        {/* <form className={classes.root} noValidate autoComplete="on"> */}
        <TextField
          className={(classes.TodoTask, "todo-task")}
          key={props.todo.id}
          id={props.todo.id}
          placeholder="Enter Your task"
          variant="outlined"
          disabled={props.disabled}
          value={props.disabled ? props.value : tempValue}
          onChange={(event) => {
            setTempValue(event.target.value);
          }}
        />
        <span style={{ width: "auto" }}>
          {" "}
          <IconButton
            aria-label="delete"
            style={{ color: "#f50057" }}
            onClick={() => props.onDelete(props.todo)}
          >
            <DeleteIcon />
          </IconButton>
        </span>
        {/* </form> */}
      </div>
    </Fade>
  );
}
