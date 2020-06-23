import React from "react";
import {createUseStyles} from "react-jss";

function ReqCard(props) {
  return (
    <React.Fragment>
      <div className={"style.container"}>
        {props.num} ' - ' {props.fibNum} ' - ' {props.date}
      </div>
    </React.Fragment>
  );
}

export default ReqCard;
