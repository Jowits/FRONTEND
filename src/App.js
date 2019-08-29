import React from "react";
import "./App.css";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import API from "./adapters/API";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  state = {
    user: undefined
  };

  componentDidMount() {
    API.validateUser().then(user => {
      this.setState({ user });
    });
  }

  signUp = user => {
    API.signUp(user).then(user => this.setState({ user }));
  };

  logIn = user => {
    API.logIn(user).then(user => this.setState({ user }));
  };

  logOut = () => {
    API.clearToken();
    this.setState({ user: undefined });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path={"/login"}
            component={routerProps => (
              <LoginForm
                header="Log in"
                submit={this.logIn}
                routerProps={routerProps}
              />
            )}
          />
          <Route
            exact
            path={"/signup"}
            component={routerProps => (
              <SignupForm
                header="Sign up"
                submit={this.signUp}
                routerProps={routerProps}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
