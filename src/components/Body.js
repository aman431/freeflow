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
  const [basecard, setbasecard] = useState("");
  const [cardname, setcardname] = useState("");
  const [Picture, setPicture] = useState();
  const [ImgData, setImgData] = useState();
  const [colorHexCode, setColorHexCode] = useState("#000000");

  return (
    <div className={classes.mainBody}>
      <div className={classes.Input}>
        <Form
          setbasecard={setbasecard}
          setcardname={setcardname}
          setPicture={setPicture}
          setImgData={setImgData}
          setColorHexCode={setColorHexCode}
          colorHexCode={colorHexCode}
        />
      </div>
      <div className={classes.border}></div>
      <div className={classes.Card}>
        <Livecard
          basecard={basecard}
          cardname={cardname}
          Picture={Picture}
          ImgData={ImgData}
          colorHexCode={colorHexCode}
        />
      </div>
    </div>
  );
}

export default Body;
