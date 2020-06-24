import React from "react";
import {useStyles} from "./styles.js";

function ReqCard(props) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div className={classes.cardText}>requested num - {props.num} </div>
      <div className={classes.cardText}>result - {props.fibNum} </div>
      <div className={classes.date}>
        {(() => {
          let date = new Date(Date.parse(props.date));
          return date.toDateString();
        })()}
      </div>
    </div>
  );
}

export default ReqCard;
