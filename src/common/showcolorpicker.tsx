import React, { FC } from "react";
import { SketchPicker } from "react-color";

type IProps = {
  onClick: () => void;
  showpicker: boolean;
  label: string;
  colorHexCode: string;
  onChange: any;
};

const showcolorpicker: FC<IProps> = ({
  onClick,
  showpicker,
  label,
  colorHexCode,
  onChange,
}) => {
  const handleChange = (e: any) => {
    return onChange(e.hex);
  };

  return (
    <>
      <button onClick={onClick}>
        {showpicker ? "Close" : "Show"} {label}
      </button>
      {showpicker && (
        <SketchPicker color={colorHexCode} onChange={handleChange} />
      )}
    </>
  );
};
export default showcolorpicker;
