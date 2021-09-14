import { Route, Switch } from "react-router-dom";
import Home from "../routes/Home";
import Legal from "../routes/Legal";
import List from "../routes/stock/List";
import "./Body.css";

function Body() {
  return (
    <Switch>
      <Route path="/stock">
        <List />
      </Route>
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
