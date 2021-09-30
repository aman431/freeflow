import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  sidebar: {
    height: "calc(100% - 50px)",
    backgroundColor: "#6C6767",
    width: "25%",
    position: "absolute",
    top: "50px",
    left: "0px",
  },
}));
const Sidebar = () => {
  const classes = useStyles();
  return <div className={classes.sidebar}></div>;
};
export default Sidebar;
