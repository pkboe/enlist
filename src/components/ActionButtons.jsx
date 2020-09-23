import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const ActionButtons = (props) => {
  const [EditState, setEditState] = useState();

  const handleEditClick = () => {
    if (IconType === "Edit") setIconType("Done");
    if (IconType === "Done") setIconType("Edit");
  };
  const renderIcon = () => {
    if (IconType === "Edit") return <EditIcon />;
    if (IconType === "Done") return <DoneIcon />;
  };
  const [IconType, setIconType] = useState("Edit");
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Fab
        color="secondary"
        aria-label="edit"
        onClick={() => {
          props.onEditClick();
          handleEditClick();
        }}
      >
        {renderIcon()}
      </Fab>
    </div>
  );
};

export default ActionButtons;
