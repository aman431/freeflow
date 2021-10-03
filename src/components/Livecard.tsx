/** Live Card update */

import React, { FC } from "react";
import { Avatar, Card, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  displaycard: {
    width: "92%",
    boxShadow: "2px 3px 16px 3px #333",
    margin: "0 auto",
    borderRadius: "20px",
    padding: "10px",
    boxSizing: "border-box",
  },
  cardname: {
    color: "#fff",
    marginLeft: "5px",
    margin: "10px 0px 5px 5px",
    fontSize: "19px",
  },
  cardAvatar: {
    margin: "4px 0px 0px 5px",
    height: "87px",
    width: "87px",
  },
  namepass: {
    color: "#fff",
    margin: "0px 0px 0px 6px",
    fontSize: "15px",
  },
}));

type IProps = {
  Picture: object | any;
  ImgData: object | any;
  colorHexCode: string;
  state: object | any;
};

const Livecard: FC<IProps> = ({ Picture, ImgData, colorHexCode, state }) => {
  const classes = useStyles();

  return (
    <Box
      className="cardswrapMain"
      style={{
        width: "70%",
        border: "none",
        background: "rgba(180, 215, 251, 0.5)",
        boxSizing: "border-box",
        padding: "10px 5px",
        marginBottom: "20px",
      }}
    >
      {/* Card */}
      <Card
        className={classes.displaycard}
        style={{
          background: colorHexCode,
        }}
      >
        {/* Avatar by default Avatar */}
        {Picture ? (
          <Avatar
            alt="Remy Sharp"
            src={ImgData}
            className={classes.cardAvatar}
          />
        ) : (
          <Avatar
            alt="Remy Sharp"
            src="https://www.freeiconspng.com/thumbs/face-icon-png/flat-face-icon-23.png"
            className={classes.cardAvatar}
          />
        )}
        {/* Brand name and card name */}
        <p className={classes.cardname}>
          {console.log("Brand name", state.brandname)}
          {state.basecard !== "" ? <>Brand {state.basecard}</> : null}
        </p>
        <p className={classes.namepass}>
          {state.cardname !== "" ? <>Card {state.cardname}</> : null}
        </p>
        <br />
      </Card>
    </Box>
  );
};
export default Livecard;
