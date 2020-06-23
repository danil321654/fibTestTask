import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import ReqCard from "./ReqCard.js";
import axios from "axios";
import {createUseStyles} from "react-jss";

function GetHistOfReq() {
  const [reqs, getReqs] = useState([]);
  const getRequests = e => {
    axios.get("/history").then(resp => getReqs(resp.data));
  };
  return (
    <React.Fragment>
      <div className={"style.container"}>
        {reqs.map(el => (
          <ReqCard
            num={JSON.parse(el.number)}
            fibNum={JSON.parse(el.fibNumber)}
            date={Date.parse(el.date)}
          />
        ))}
      </div>
      <Button onClick={getRequests}>get</Button>
      <Link to="/Fibbonnacci"> get num </Link>
    </React.Fragment>
  );
}

export default GetHistOfReq;
