/** Sidebar */
import React from "react";

const Sidebar = () => {
  return (
    <div
      className="sidebarUiset"
      style={{
        height: "calc(100% - 50px)",
        backgroundColor: "#6C6767",
        width: "25%",
        position: "absolute",
        top: "50px",
        left: "0px",
      }}
    ></div>
  );
};
export default Sidebar;
