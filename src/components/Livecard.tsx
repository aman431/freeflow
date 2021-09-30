/** Live Card update */

import React, { FC } from "react";
import { Avatar, Card, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: "300px",
    border: "none",
    background: "rgba(180, 215, 251, 0.5)",
    boxSizing: "border-box",
    padding: "10px 5px",
    marginTop: "-40%",
    marginBottom: "20px",
  },
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
    <Box className={classes.root}>
      {/* Card */}
      <Card
        className={classes.displaycard}
        style={{
          background: colorHexCode,
        }}
      >
        {/* Avatar by default Avatar i have sended it */}
        {Picture ? (
          <Avatar
            alt="Remy Sharp"
            src={ImgData}
            className={classes.cardAvatar}
          />
        ) : (
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3gOqG9WdfCMoKW8RRkG6_Fo-H9ZGTYyl_1A&usqp=CAU"
            className={classes.cardAvatar}
          />
        )}
        {/* Brand name and card name */}
        <p className={classes.cardname}>Brand Name {state.basecard}</p>
        <p className={classes.namepass}>Card Name {state.cardname}</p>
        <br />
      </Card>
    </Box>
  );
};
export default Livecard;
