import React from "react";
import Boxes from "./boxes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import  Login  from "./login/login";
  const Routes = () => {
     return (
      <BrowserRouter>
      <Switch>
      <Route path="/login"   > <Login/> </Route>
        <Route path="/boxes"   > <Boxes/> </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
