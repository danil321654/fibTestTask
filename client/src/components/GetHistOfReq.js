import React, {useState} from "react";
import {Link} from "react-router-dom";
import ReqCard from "./ReqCard.js";
import axios from "axios";
import {useStyles} from "./styles.js";

function GetHistOfReq() {
  const [reqs, getReqs] = useState([]);
  const classes = useStyles();
  axios
    .get("/history")
    .then(resp => {
      console.log(resp.data);
      getReqs(resp.data);
    })
    .catch(err => console.log(err));
  console.log("history");
  return (
    <div className={classes.wrapper}>
      <div className={classes.cards}>
        {reqs.map(el => (
          <ReqCard
            num={el.originNum}
            fibNum={el.resultNum}
            date={el.requestedDate}
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
