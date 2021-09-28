import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    height: "450px",
    backgroundColor: "#6c6767",
    width: "25%",
  },
}));
const Sidebar = () => {
  const classes = useStyles();
  return <div className={classes.sidebar}></div>;
};

export default Sidebar;
