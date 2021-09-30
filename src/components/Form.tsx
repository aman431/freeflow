import { makeStyles } from "@material-ui/styles";
import { FormHelperText } from "@material-ui/core";
import React, { useState, FC } from "react";
// import { SketchPicker } from "react-color";
import Showcolorpicker from "../common/showcolorpicker";
import "./../App.css";

type IProps = {
  handleChange: any;
  setPicture: object | any;
  setImgData: React.Dispatch<React.SetStateAction<object | any>>;
  setColorHexCode: React.Dispatch<React.SetStateAction<string>>;
  colorHexCode: string;
  state: object | any;
  handleonSubmit: () => void;
};

const Form: FC<IProps> = ({
  handleChange,
  setPicture,
  setImgData,
  setColorHexCode,
  colorHexCode,
  state,
  handleonSubmit,
}) => {
  const [showpicker, setshowpicker] = useState(Boolean);
  const handleonclick = () => {
    const data = document.getElementById("typefile")!;
    data.click();
  };
  const handleonchange = (e: any) => {
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

  const handlecolorpicker = (color: string) => {
    console.log(color);
    setColorHexCode(color);
  };
  return (
    <div
      className="fieldsColumn"
      style={{ display: "grid", marginTop: "10px" }}
    >
      <input
        name="basecard"
        className="input"
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
        className="input"
        value={state.cardname}
        placeholder="Card"
        onChange={(e) => handleChange(e, "fromcardname")}
      />
      {state.fromwhere === "fromcardname" && (
        <FormHelperText error style={{ fontSize: "12px" }}>
          Limit is exced
        </FormHelperText>
      )}
      <div className="colorPickerNew">
        <Showcolorpicker
          onClick={handleshowpicker}
          showpicker={showpicker}
          label={"primary picker"}
          colorHexCode={colorHexCode}
          onChange={handlecolorpicker}
        />
      </div>
      {/* <div className="colorPickerNew">
        <Showcolorpicker
          onClick={handleshowpicker}
          showpicker={showpicker}
          label={"secondary picker"}
          colorHexCode={colorHexCode}
          onChange={handlecolorpicker}
        />
      </div> */}
      <button onClick={handleonclick} className="button">
        Upload File
      </button>
      <input
        id="typefile"
        type="file"
        onChange={handleonchange}
        style={{ display: "none" }}
      />
      <button className="button" onClick={handleonSubmit}>
        On Submit
      </button>
    </div>
  );
};
export default Form;
