import React from "react";
import "./App.css";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import MainPage from './pages/MainPage';
import PageNotFound from './pages/PageNotFound';
import API from "./adapters/API";
import { Route, Switch } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  state = {
    user: undefined
  };

  componentDidMount() {
    API.validateUser()
      .then(data => {
        if (!data.user && !(this.props.location.pathname === "/signup")) {
          this.props.history.push('/login')
        } else {
          this.setState({ user: data.user })
          if (this.props.location.pathname === "/login") {
            this.props.history.push('/')
          }
        }}
      )
  }

  signUp = user => {
    API.signUp(user)
    .then(user =>
      !user ? this.props.history.push('/login') : this.success(user))
  };

  logIn = user => {
    API.logIn(user)
    .then(user => 
      !user ? this.props.history.push('/login') : this.success(user))
  };

  success = (user) => {
   this.setState({ user })
   this.props.history.push('/')
 }
  logOut = () => {
    API.clearToken();
    this.setState({ user: undefined });
    this.props.history.push('/login')
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
          <Route path={"/"} render={props => <MainPage user={this.state.user} logOut={this.logOut}/>} />
          <Route component={PageNotFound} />
        </Switch>
      </>
    );
  }
}

export default App;
