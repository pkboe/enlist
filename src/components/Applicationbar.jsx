import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import "todologo.svg";
// import { light } from "@material-ui/core/styles/createPalette";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
  appbar: {
    backgroundColor: "transparent",
    height: "5%",
  },
}));
function Applicationbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <span>
              <img
                src="todologo.svg"
                alt=""
                style={{ width: "40px", height: "40px" }}
              />
            </span>
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Enlist : A To-Do List App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Applicationbar;
