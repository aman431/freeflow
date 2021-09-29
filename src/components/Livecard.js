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
const Livecard = ({ Picture, ImgData, colorHexCode, state }) => {
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
        ) : (
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3gOqG9WdfCMoKW8RRkG6_Fo-H9ZGTYyl_1A&usqp=CAU"
            className={classes.Avatar}
          />
        )}
        <p className={classes.name}>Brand Name {state.basecard}</p>
        <p className={classes.name}>Card Name {state.cardname}</p>
        <br />
      </Card>
    </Box>
  );
};
export default Livecard;
