import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Cadastro from "./pages/Cadastro";
import CadTeam from "./pages/CadTeam";
import CadTec from "./pages/CadTec";
import CadJog from "./pages/CadJog";
import Home from "./pages/Home";
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/Cadastro" component={Cadastro} />
      <Route path="/CadTeam" component={CadTeam} />
      <Route path="/CadTec" component={CadTec} />
      <Route path="/CadJog" component={CadJog} />
      <PrivateRoute path="/app" component={() => <h1>App</h1>} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;


