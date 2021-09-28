import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { SketchPicker } from "react-color";
// import ColorPicker from "react-color-picker";

const useStyles = makeStyles((theme) => ({
  fields: {
    display: "grid",
    marginTop: "10px",
  },
}));
const Form = ({
  setbasecard,
  setcardname,
  setPicture,
  setImgData,
  setColorHexCode,
  colorHexCode,
}) => {
  const classes = useStyles();

  const handleonclick = () => {
    document.getElementById("typefile").click();
  };

  const handleonchange = (e) => {
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <div className={classes.fields}>
      <input
        placeholder="BaseCard"
        onChange={(e) => setbasecard(e.target.value)}
      />
      <input placeholder="Card" onChange={(e) => setcardname(e.target.value)} />
      <SketchPicker
        color={colorHexCode}
        onChange={(e) => setColorHexCode(e.hex)}
      />
      <button onClick={handleonclick}>Upload File</button>
      <input
        id="typefile"
        type="file"
        onChange={handleonchange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default Form;
