import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import CreateGames from "./pages/create-game";
import CreateUsers from "./pages/create-user";
import Login from "./pages/login";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/gamestore/login" component={Login} />
        <Route path="/gamestore/home" component={Home} />
        <Route path="/gamestore/users" component={CreateUsers} />
        <Route path="/gamestore/games" component={CreateGames} />
      </Switch>
    </Router>
  );
}
