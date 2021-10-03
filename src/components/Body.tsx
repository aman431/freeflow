/** Body of the application */

import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Form from "./Form";
import Livecard from "./Livecard";
import { AppActions, AppActionType } from "../redux/reducer/appReducer";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import Aftersubmit from "./Aftersubmit";
import ModalPopup from "../common/ModalPopup";

const useStyles = makeStyles((theme) => ({
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
  const [colorHexCode, setColorHexCode] = useState("#6F6EE8");
  const [showModalList, openModal] = useState<any>({});

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

    openModal({
      ...showModalList,
      openModalpopup: true,
    });

    // dispatch action on reducers with action type
    dispatch({
      type: AppActionType.setusercard,
      payload: userdata,
    });
  };

  //close Properties Modal
  const onCloseDetails = () => {
    openModal({});
  };

  // after submit file need to render
  const onSubmit = <Aftersubmit />;

  return (
    <div
      className="cardFormBlog"
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginTop: "20%",
        padding: "0px 35px",
        boxSizing: "border-box",
      }}
    >
      {showModalList.openModalpopup && (
        <ModalPopup
          modalTitle="Live Card"
          modalBody={onSubmit}
          onCloseDetails={onCloseDetails}
          size="sm"
        />
      )}
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
      <div className="liveCardBlog">
        {/* live card */}
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
