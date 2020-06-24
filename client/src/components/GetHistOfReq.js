import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import ReqCard from "./ReqCard.js";
import axios from "axios";
import {useStyles} from "./styles.js";

function GetHistOfReq() {
  const [reqs, getReqs] = useState([]);
  const classes = useStyles();
  axios.get("/history").then(resp => getReqs(resp.data));
  return (
    <div className={classes.wrapper}>
      <div className={classes.cards}>
        {reqs.map(el => (
          <ReqCard
            num={JSON.parse(el.number)}
            fibNum={JSON.parse(el.fibNumber)}
            date={el.date}
          />
        ))}
      </div>
      <Link className={classes.linkToPage} to="/Fibbonnacci">
        {" "}
        get num{" "}
      </Link>
    </div>
  );
}

export default GetHistOfReq;
