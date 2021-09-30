/** Body of the application */

import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Form from "./Form";
import Livecard from "./Livecard";
import { AppActions, AppActionType } from "../redux/reducer/appReducer";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import Aftersubmit from "./Aftersubmit";

const useStyles = makeStyles((theme) => ({
  mainBody: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginTop: "20%",
    padding: "0px 35px",
    boxSizing: "border-box",
  },
  border: {
    height: "90%",
    width: "1px",
    backgroundColor: "#565252",
    marginTop: "31px",
  },
  Card: {
    width: "50%",
    float: "left",
  },
}));

function Body() {
  const classes = useStyles();

  // initialstate
  const initialState = {
    cardname: "",
    basecard: "",
    fromwhere: "",
  };

  // dispatch action on redux
  const dispatch = useDispatch<Dispatch<AppActions>>();
  const [state, setState] = useState(initialState);
  const [Picture, setPicture] = useState();
  const [ImgData, setImgData] = useState();
  const [colorHexCode, setColorHexCode] = useState("#000000");

  // update state on change
  const handleChange = (e: any, fromwhere: string) => {
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

  // handle on submit
  const handleonSubmit = () => {
    const userdata = {
      brandname: state.basecard,
      cardname: state.cardname,
      image: ImgData,
      colorpicker: colorHexCode,
    };

    // dispatch action on reducers with action type
    dispatch({
      type: AppActionType.setusercard,
      payload: userdata,
    });
  };

  return (
    <div className={classes.mainBody}>
      <div className="InputBoxForm">
        {/* Show forms */}
        <Form
          handleChange={handleChange}
          setPicture={setPicture}
          setImgData={setImgData}
          setColorHexCode={setColorHexCode}
          colorHexCode={colorHexCode}
          state={state}
          handleonSubmit={handleonSubmit}
        />
      </div>
      <div className={classes.border}></div>
      <div>
        {/* live card */}
        <Livecard
          state={state}
          Picture={Picture}
          ImgData={ImgData}
          colorHexCode={colorHexCode}
        />
        {/* Afer hit to the submit button */}
        <Aftersubmit />
      </div>
    </div>
  );
}

export default Body;
