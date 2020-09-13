import React from "react";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import GetFibNum from "./components/GetFibNum.js";
import GetHistOfReq from "./components/GetHistOfReq.js";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Redirect to="/Fibbonnacci" component={GetFibNum} />
      </Route>
      <Route path="/Fibbonnacci" component={GetFibNum} />
      <Route path="/history" component={GetHistOfReq} />
    </BrowserRouter>
  );
}

export default App;
