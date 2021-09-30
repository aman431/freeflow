import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    backgroundColor: "#bdbdbd",
    height: "50px",
  },
}));
function Header() {
  const classes = useStyles();
  return <div className={classes.header}></div>;
}

export default Header;
