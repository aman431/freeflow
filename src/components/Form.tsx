import { FormHelperText } from "@material-ui/core";
import React, { useState, FC } from "react";
import Showcolorpicker from "../common/showcolorpicker";
import "./../App.css";

// input props
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

  // handle upload file
  const handleonclick = () => {
    const data = document.getElementById("typefile")!;
    data.click();
  };

  // upload file
  const handleonchange = (e: any) => {
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
      const reader = new FileReader(); // file reader to read a file from the device
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // handle to show the color picker on click to button
  const handleshowpicker = () => {
    if (showpicker) {
      setshowpicker(false);
    } else {
      setshowpicker(true);
    }
  };

  // color picker
  const handlecolorpicker = (color: string) => {
    setColorHexCode(color);
  };

  const checkvalidation = (e: any, fromwhere: string, id: string) => {
    // check special string
    var iChars = "!`@#$%^&*()+=-[]\\';,./{}|\":<>?~_"; // special character
    var data1: any = document.getElementById(id); // take a input id
    var data = data1.value;

    // loop a string and check a data by special character if index exist then open alert
    for (var i = 0; i < data.length; i++) {
      if (iChars.indexOf(data.charAt(i)) !== -1) {
        alert("Your string has special characters. \nThese are not allowed.");
        const data: any = document.getElementById(id)!;
        data.value = ""; // send a empty if exist
        return false; // retun false
      }
    }

    //if special string are not there
    handleChange(e, fromwhere);
  };

  return (
    <div
      className="fieldsColumn"
      style={{ display: "grid", marginTop: "10px" }}
    >
      {/* Show board name */}
      <input
        name="basecard"
        id="brandcard"
        className="input"
        value={state.basecard}
        placeholder="BaseCard"
        onChange={(e) => {
          checkvalidation(e, "frombrandcard", "brandcard");
        }}
      />

      {/* Check error character validation limit 10 */}
      {state.fromwhere === "frombrandcard" && (
        <FormHelperText error style={{ fontSize: "12px" }}>
          Limit is exced
        </FormHelperText>
      )}

      {/* Show card name */}
      <input
        name="cardname"
        id="cardname"
        className="input"
        value={state.cardname}
        placeholder="Card"
        onChange={(e) => checkvalidation(e, "fromcardname", "cardname")}
      />

      {/* Check error character validation limit 10 */}
      {state.fromwhere === "fromcardname" && (
        <FormHelperText error style={{ fontSize: "12px" }}>
          Limit is exced
        </FormHelperText>
      )}

      {/* Show color picker */}
      <div className="colorPickerNew">
        <Showcolorpicker
          onClick={handleshowpicker}
          showpicker={showpicker}
          label={"primary picker"}
          colorHexCode={colorHexCode}
          onChange={handlecolorpicker}
        />
      </div>

      {/* upload file */}
      <button onClick={handleonclick} className="button">
        Upload File
      </button>
      <input
        id="typefile"
        type="file"
        accept=".ai, .bmp, .gif, .ico, .jpg, .ps, .psd, .svg, .tif, .tiff" // set restirction for jpeg png
        onChange={handleonchange}
        style={{ display: "none" }}
      />

      {/* On submit */}
      <button className="button" onClick={handleonSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Form;
