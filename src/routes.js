import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import CreateGames from "./pages/create-game";
import CreateUsers from "./pages/create-user";
import Login from "./pages/login";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/gamestore/home" component={Home} />
      <Route path="/gamestore/users" component={CreateUsers} />
      <Route path="/gamestore/games" component={CreateGames} />
    </Switch>
  );
}
