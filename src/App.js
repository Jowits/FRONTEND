import React from "react";
import "./App.css";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import MainPage from "./pages/MainPage";
import PageNotFound from "./pages/PageNotFound";
import API from "./adapters/API";
import { Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
  state = {
    user: undefined,
    cats: []
  };

  componentDidMount() {
    API.validateUser().then(data => {
      if (data.error) {
        this.props.history.push("/login");
      } else {
        this.setState({ user: data });
      }
    });
    API.fetchCats().then(data =>
      this.setState({
        cats: data.filter(cat => cat.user.id !== this.state.user.id)
      })
    );
  }

  updateUserState = cat => {
    if (!this.state.user.cats.includes(cat))
      this.setState({ cats: [...this.state.user.cats, cat] });
  };

  updateCatCat = cat => {
    if (!this.state.cats.includes(cat))
      this.setState({ user: { ...this.state.user, cat } });
  };

  deleteCat = id => {
    API.deleteCat(id).then(data => {
      const newCatArray = this.state.user.cats.filter(
        cat => cat.id !== data.deleted_cat_id
      );
      this.setState({
        user: {
          ...this.state.user,
          cats: newCatArray
        },
        cats: {
          ...this.state.cats,
          cats: newCatArray
        }
      });
    });
  };

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
                updateCatCat={this.updateCatCat}
                cats={this.state.cats}
                user={this.state.user}
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
