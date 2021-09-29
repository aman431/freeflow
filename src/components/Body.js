import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Form from "./Form";
import Livecard from "./Livecard";
const useStyles = makeStyles((theme) => ({
  mainBody: {
    display: "flex",
    alignItems: "center",
    width: "70%",
    marginLeft: "25%",
  },
  Input: {
    display: "flex",
    flexDirection: "column",
    marginRight: "100px",
  },
  border: {
    height: "90%",
    width: "1px",
    backgroundColor: "#565252",
    marginRight: "102px",
    marginTop: "31px",
  },
}));

function Body() {
  const classes = useStyles();
  const initialState = {
    cardname: "",
    basecard: "",
    fromwhere: "",
  };
  const [state, setState] = useState(initialState);
  const [Picture, setPicture] = useState();
  const [ImgData, setImgData] = useState();
  const [colorHexCode, setColorHexCode] = useState("#000000");

  const handleChange = (e, fromwhere) => {
    if (e.target.value.length <= 10) {
      setState({
        ...state,
        [e.target.name]: e.target.value,
        fromwhere: "",
      });
    } else {
      setState({
        ...state,
        fromwhere: fromwhere,
      });
    }
  };
  return (
    <div className={classes.mainBody}>
      <div className={classes.Input}>
        <Form
          handleChange={handleChange}
          setPicture={setPicture}
          setImgData={setImgData}
          setColorHexCode={setColorHexCode}
          colorHexCode={colorHexCode}
          state={state}
        />
      </div>
      <div className={classes.border}></div>
      <div className={classes.Card}>
        <Livecard
          state={state}
          Picture={Picture}
          ImgData={ImgData}
          colorHexCode={colorHexCode}
        />
      </div>
    </div>
  );
}

export default Body;
