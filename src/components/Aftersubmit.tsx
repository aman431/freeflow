/** Setup redux and call the data from the redux */

import { Avatar, Card, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { AppState } from "../redux/reducer/appReducer";

const useStyles = makeStyles(() => ({
  root: {
    float: "left",
    width: "300px",
    border: "none",
    background: "rgba(180, 215, 251, 0.5)",
    boxSizing: "border-box",
    padding: "10px 5px",
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

const Aftersubmit = () => {
  const classes = useStyles();
  const { userCard } = useSelector<{ app: AppState }, AppState>(
    (state) => state.app
  );

  return (
    <>
      {/* Check if your object should not be a empty */}
      {Object.keys(userCard).length !== 0 && (
        <Card
          className={classes.displaycard}
          style={{
            background: userCard.colorpicker,
          }}
        >
          {userCard.image ? (
            //After uploading
            <Avatar
              alt="Remy Sharp"
              src={userCard.image}
              className={classes.cardAvatar}
            />
          ) : (
            // Default image
            <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3gOqG9WdfCMoKW8RRkG6_Fo-H9ZGTYyl_1A&usqp=CAU"
              className={classes.cardAvatar}
            />
          )}
          {/* Show brand name and card name */}
          <p className={classes.cardname}>Brand Name {userCard.brandname}</p>
          <p className={classes.namepass}>Card Name {userCard.cardname}</p>
          <br />
        </Card>
      )}
    </>
  );
};
export default Aftersubmit;
