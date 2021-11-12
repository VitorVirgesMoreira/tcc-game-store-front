import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import StoreProvider from "./components/Store/Provider";
import CreateGames from "./pages/create-game";
import CreateUsers from "./pages/create-user";
import Login from "./pages/login";
import RoutesPrivate from "./components/Routes/Private/Private";

export default function Routes() {
  return (
    <StoreProvider>
      <Switch>
        <Route exact path="/" component={Login} />
        <RoutesPrivate path="/gamestore/home" component={Home} />
        <Route path="/gamestore/users" component={CreateUsers} />
        <RoutesPrivate path="/gamestore/games" component={CreateGames} />
      </Switch>
    </StoreProvider>
  );
}
