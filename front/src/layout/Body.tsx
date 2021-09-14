import { Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Legal from "../routes/Legal";
import "./Body.css";

function Body() {
  return (
    <Switch>
      <Route path="/legal">
        <Legal />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Body;
