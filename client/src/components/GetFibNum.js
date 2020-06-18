import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import axios from "axios";

function GetFibNum() {
  const [res, getRes] = useState(0);
  const [num, setNum] = useState(1);
  const getNum = e => {
    axios
      .get("/fib", {
        params: {
          n: num
        }
      })
      .then(resp => getRes(resp.data));
  };
  return (
    <React.Fragment>
      <form name="fib">
        <input
          type="number"
          min="1"
          max="100"
          placeholder={num}
          onChange={e => setNum(e.currentTarget.value)}
        />{" "}
        <Button onClick={getNum}>get</Button>
      </form>
      <div>here is num - {res}</div>
      <Link to="/history"> history </Link>
    </React.Fragment>
  );
}

export default GetFibNum;
