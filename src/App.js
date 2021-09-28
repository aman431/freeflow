import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import Header from "./components/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px",
    border: "1px solid ",
  },
  body: {
    width: "80%",
    display: "flex",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.body}>
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
