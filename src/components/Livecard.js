import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Avatar, Card, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    height: "150px",
    border: "none",
    background: "lightblue",
  },
  displaycard: {
    height: "90%",
    width: "90%",
    /* padding: 15px; */
    margin: "10px",
  },
  Avatar: {
    margin: "10px",
    height: "50px",
  },
  name: {
    color: "#fff",
    marginLeft: "5px",
  },
}));
const Livecard = ({ basecard, cardname, Picture, ImgData, colorHexCode }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Card
        className={classes.displaycard}
        style={{
          background: colorHexCode,
        }}
      >
        {Picture ? (
          <Avatar alt="Remy Sharp" src={ImgData} className={classes.Avatar} />
        ) : null}
        <p className={classes.name}>Brand Name {basecard}</p>
        <p className={classes.name}>Card Name {cardname}</p>
        <br />
      </Card>
    </Box>
  );
};
export default Livecard;
