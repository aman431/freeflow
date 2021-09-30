import { makeStyles } from "@material-ui/styles";
import { FormHelperText } from "@material-ui/core";
import React, { useState, FC } from "react";
import { SketchPicker } from "react-color";
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
  return (
    <div
      className="fieldsColumn"
      style={{ display: "grid", marginTop: "10px" }}
    >
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
      <div className="colorPickerNew">
        <button onClick={handleshowpicker}>
          {showpicker ? "Close" : "Show"} Color Picker
        </button>
        {showpicker && (
          <SketchPicker
            color={colorHexCode}
            onChange={(e) => setColorHexCode(e.hex)}
          />
        )}
      </div>
      <button onClick={handleonclick} style={{ marginBottom: "10px" }}>
        Upload File
      </button>
      <input
        id="typefile"
        type="file"
        onChange={handleonchange}
        style={{ display: "none" }}
      />
      <button onClick={handleonSubmit}>On Submit</button>
    </div>
  );
};
export default Form;

// import { makeStyles } from "@material-ui/styles";
// import { FormHelperText } from "@material-ui/core";
// import React, { useState, FC } from "react";
// import { SketchPicker } from "react-color";

// const useStyles = makeStyles((theme) => ({
//   fields: {
//     display: "grid",
//     marginTop: "10px",
//   },
// }));

// type IProps = {
//   handleChange: any;
//   setPicture: object | any;
//   setImgData: React.Dispatch<React.SetStateAction<object | any>>;
//   setColorHexCode: React.Dispatch<React.SetStateAction<string>>;
//   colorHexCode: string;
//   state: object | any;
//   handleonSubmit: () => void;
// };

// const Form: FC<IProps> = ({
//   handleChange,
//   setPicture,
//   setImgData,
//   setColorHexCode,
//   colorHexCode,
//   state,
//   handleonSubmit,
// }) => {
//   const classes = useStyles();
//   const [showpicker, setshowpicker] = useState(Boolean);
//   const handleonclick = (): any => {
//     const item: any = window.document.getElementById("typefile")!;
//     item.click();
//   };

//   const handleonchange = (e: any) => {
//     if (e.target.files[0]) {
//       setPicture(e.target.files[0]);
//       const reader = new FileReader();
//       reader.addEventListener("load", () => {
//         setImgData(reader.result);
//       });
//       reader.readAsDataURL(e.target.files[0]);
//     }
//   };
//   const handleshowpicker = () => {
//     if (showpicker) {
//       setshowpicker(false);
//     } else {
//       setshowpicker(true);
//     }
//   };
//   return (
//     <div className={classes.fields}>
//       <input
//         name="basecard"
//         value={state.basecard}
//         placeholder="BaseCard"
//         onChange={(e) => {
//           handleChange(e, "frombrandcard");
//         }}
//       />
//       {state.fromwhere === "frombrandcard" && (
//         <FormHelperText error style={{ fontSize: "12px" }}>
//           Limit is exced
//         </FormHelperText>
//       )}
//       <input
//         name="cardname"
//         value={state.cardname}
//         placeholder="Card"
//         onChange={(e) => handleChange(e, "fromcardname")}
//       />
//       {state.fromwhere === "fromcardname" && (
//         <FormHelperText error style={{ fontSize: "12px" }}>
//           Limit is exced
//         </FormHelperText>
//       )}
//       <button onClick={handleshowpicker}>
//         {showpicker ? "Close" : "Show"} Color Picker
//       </button>
//       {showpicker && (
//         <SketchPicker
//           color={colorHexCode}
//           onChange={(e) => setColorHexCode(e.hex)}
//         />
//       )}
//       <button onClick={handleonclick}>Upload File</button>
//       <input
//         id="typefile"
//         type="file"
//         onChange={handleonchange}
//         style={{ display: "none" }}
//       />
//       <button onClick={handleonSubmit}>On Submit</button>
//     </div>
//   );
// };

// export default Form;
