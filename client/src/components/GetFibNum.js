import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import axios from "axios";
import {useStyles} from "./styles.js";

function GetFibNum() {
  const classes = useStyles();
  const [res, getRes] = useState(1);
  const [num, setNum] = useState(1);
  const getNum = e => {
    if (num > 100 || num <= 0) setNum(1);
    else
      axios
        .get("/fib", {
          params: {
            n: num
          }
        })
        .then(resp => {
          console.log(resp.data);
          getRes(resp.data);
        })
        .catch(err => console.log(err));
  };
  return (
    <div className={classes.wrapper}>
      <form name="fib" className={classes.card}>
        <input
          type="number"
          min="1"
          max="100"
          value={num}
          onChange={e => {
            setNum(e.currentTarget.value);
          }}
        />{" "}
        <Button onClick={getNum}>get</Button>
      </form>
      <div className={classes.card}>here is num - {res}</div>
      <Link className={classes.linkToPage} to="/history">
        {" "}
        history{" "}
      </Link>
    </div>
  );
}

export default GetFibNum;
