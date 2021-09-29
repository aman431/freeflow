import { makeStyles } from "@material-ui/styles";
import { FormHelperText } from "@material-ui/core";
import React, { useState } from "react";
import { SketchPicker } from "react-color";

const useStyles = makeStyles((theme) => ({
  fields: {
    display: "grid",
    marginTop: "10px",
  },
}));
const Form = ({
  handleChange,
  setPicture,
  setImgData,
  setColorHexCode,
  colorHexCode,
  state,
  error,
}) => {
  const classes = useStyles();
  const [showpicker, setshowpicker] = useState(Boolean);
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
  const handleshowpicker = () => {
    if (showpicker) {
      setshowpicker(false);
    } else {
      setshowpicker(true);
    }
  };
  return (
    <div className={classes.fields}>
      <input
        name="basecard"
        value={state.basecard}
        placeholder="BaseCard"
        onChange={(e) => {
          handleChange(e, "frombrandcard");
        }}
      />
      {state.fromwhere === "frombrandcard" && (
        <FormHelperText error style={{ fontSize: "12px" }}>
          Limit is exced
        </FormHelperText>
      )}
      <input
        name="cardname"
        value={state.cardname}
        placeholder="Card"
        onChange={(e) => handleChange(e, "fromcardname")}
      />
      {state.fromwhere === "fromcardname" && (
        <FormHelperText error style={{ fontSize: "12px" }}>
          Limit is exced
        </FormHelperText>
      )}
      <button onClick={handleshowpicker}>
        {showpicker ? "Close" : "Show"} Color Picker
      </button>
      {showpicker && (
        <SketchPicker
          color={colorHexCode}
          onChange={(e) => setColorHexCode(e.hex)}
        />
      )}
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
