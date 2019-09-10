import React from "react";
import "./App.css";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import MainPage from "./pages/MainPage";
import PageNotFound from "./pages/PageNotFound";
import { Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import API from "./adapters/API";

class App extends React.Component {
  state = {
    user: undefined
  };

  componentDidMount() {
    if (localStorage.token) {
      API.validateUser().then(data => {
        if (data.error) {
          this.props.history.push("/login");
        } else {
          this.setState({ user: data });
        }
      });
    }
  }

  signUp = user => {
    API.signUp(user).then(user =>
      !user ? this.props.history.push("/login") : this.success(user)
    );
  };

  logIn = user => {
    API.logIn(user).then(user =>
      !user ? this.props.history.push("/login") : this.success(user)
    );
  };

  success = user => {
    this.setState({ user });
    this.props.history.push("/");
  };
  logOut = () => {
    API.clearToken();
    this.setState({ user: undefined });
    this.props.history.push("/login");
  };

  render() {
    return (
      <>
        <Switch>
          <Route
            exact
            path={"/login"}
            component={routerProps => (
              <LoginForm
                user={this.state.user}
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
                user={this.state.user}
                header="Sign up"
                submit={this.signUp}
                routerProps={routerProps}
              />
            )}
          />
          <Route
            path={"/"}
            render={routerProps => (
              <MainPage
                updateUserState={this.updateUserState}
                cats={this.state.cats}
                user={this.state.user}
                // userCats={this.userCats()}
                logOut={this.logOut}
                deleteCat={this.deleteCat}
                {...routerProps}
              />
            )}
          />
          <Route component={PageNotFound} />
        </Switch>
      </>
    );
  }
}

export default App;
