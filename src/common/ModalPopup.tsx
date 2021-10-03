/**
 * Make a common comment of Modal pop ...!
 * Dividing a section 3 parts
 * 1. DialogTitle Title.
 * 2. DialogContent.
 * 3. Main pop up.
 */

import { IconButton, Typography } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import { create } from "domain";
import React, { ReactNode } from "react";

// Input props

interface IProps {
  modalTitle: ReactNode;
  modalBody: ReactNode;
  onCloseDetails: any;
  size: any;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: "1rem 1.5rem",
      backgroundColor: "#f5f5f5",
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

// Interface Dialogue title
export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  classes: any;
  onClose: () => void;
}

// DialogTitle
const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          X
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

// content we can also provide a styling on body content
// MuiDialogContent for Modal content...!

// empty styling
// we can able to provide a style to the body from here

const style = createStyles({});
const DialogContent = withStyles(style)(MuiDialogContent);

//Main Component Main Modal pop up.
const ModalPopup = ({
  modalTitle,
  modalBody,
  onCloseDetails,
  size,
}: IProps) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    try {
      setOpen(false);
      onCloseDetails();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {/* Dialog Box */}
      <Dialog
        PaperProps={{
          style: { borderRadius: 12, width: "calc(50% - 64px)" },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={size}
        fullWidth
      >
        {/* Title */}
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <h1
            style={{
              margin: "13px 0px 13px",
              lineHeight: "normal",
            }}
          >
            {modalTitle}
          </h1>
        </DialogTitle>
        {/* Main Content */}
        <DialogContent dividers>{modalBody}</DialogContent>
      </Dialog>
    </div>
  );
};

export default ModalPopup;
