import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import React from "react";
import { StylesProvider } from "@material-ui/core/styles";

const App = () => {
  return (
    <>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing}></Route>
            <Route path="/" component={Landing}></Route>
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </>
  );
};

export default App;
