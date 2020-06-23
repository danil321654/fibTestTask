import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import axios from "axios";

function GetFibNum() {
  const [res, getRes] = useState(1);
  const [num, setNum] = useState(1);
  const getNum = e => {
    axios
      .get("/fib", {
        params: {
          n: num
        }
      })
      .then(resp => getRes(JSON.parse(resp.data)));
  };
  return (
    <React.Fragment>
      <form name="fib">
        <input
          type="number"
          min="1"
          max="100"
          value={num}
          onChange={e =>
            e.currentTarget.value <= 100 && e.currentTarget.value >= 1
              ? setNum(e.currentTarget.value)
              : setNum(100)
          }
        />{" "}
        <Button onClick={getNum}>get</Button>
      </form>
      <div>here is num - {res}</div>
      <Link to="/history"> history </Link>
    </React.Fragment>
  );
}

export default GetFibNum;
