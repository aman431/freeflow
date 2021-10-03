/** Make a common file for color picker */

import React, { FC } from "react";
import { SketchPicker } from "react-color";
import "../App.css";

// Input Props
type IProps = {
  onClick: () => void;
  showpicker: boolean;
  label: string;
  colorHexCode: string;
  onChange: any;
};

const showcolorpicker: FC<IProps> = (props) => {
  // handle props
  const { onClick, showpicker, label, colorHexCode, onChange, ...others } =
    props;

  // handle on change
  const handleChange = (e: any) => {
    return onChange(e.hex);
  };

  return (
    <div {...others}>
      {/* Show and Close according to user action on button */}
      <button onClick={onClick} className="button">
        {showpicker ? "Close" : "Show"} {label}
      </button>

      {/* Color picker */}
      {showpicker && (
        <SketchPicker color={colorHexCode} onChange={handleChange} />
      )}
    </div>
  );
};

export default showcolorpicker;
