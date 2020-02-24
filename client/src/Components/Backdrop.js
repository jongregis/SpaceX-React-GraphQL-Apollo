import React from "react";
import Backdrop1 from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

export default function Backdrop() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <Backdrop1 className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop1>
    </div>
  );
}
