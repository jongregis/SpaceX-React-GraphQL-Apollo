import React from "react";
import pic from "../images/spacex.png";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  main: {
    height: "800px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    width: "1000px",

    margin: "auto"
  }
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Link to="/launches">
        <img src={pic} className={classes.img} />
      </Link>
    </div>
  );
}
