import React from "react";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

function GetHistOfReq() {
  return (
    <React.Fragment>
      <textarea /> <Button>get</Button> /> <div>there will be your history</div>
      <Link to="/Fibbonnacci"> get num </Link>
    </React.Fragment>
  );
}

export default GetHistOfReq;
