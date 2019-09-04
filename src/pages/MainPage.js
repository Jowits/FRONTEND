import React from "react";
import NavBar from "../components/NavBar";
import Menu from "../components/Menu";
import { Route } from "react-router-dom";
import Profile from "../components/Profile";
import CatForm from "../components/CatForm";
import EmailForm from "../components/EmailForm";
import CatContainer from "../containers/CatContainer";

class MainPage extends React.Component {
  state = {
    receiver: ""
  };

  setsReceiver = user => {
    this.setState({
      receiver: user
    });
  };

  render() {
    if (!this.props.user) return <div></div>;
    return (
      <>
        <NavBar />
        <Route
          path={"/menu"}
          render={routerProps => (
            <Menu
              routerProps={routerProps}
              logOut={this.props.logOut}
              user={this.props.user}
            />
          )}
        />
        <Route
          path={"/profile/:id"}
          render={routerProps => (
            <Profile user={this.props.user} {...routerProps} />
          )}
        />
        <Route
          path={"/add-cat"}
          render={routerProps => (
            <CatForm user={this.props.user} {...routerProps} />
          )}
        />
        {/* <Route
          path={"/"}
          render={routerProps => (
            <CatCard user={this.props.user} {...routerProps}  />
          )}
        /> */}
        <Route
          exact
          path={"/"}
          render={routerProps => (
            <CatContainer
              setReceiver={this.setsReceiver}
              user={this.props.user}
              {...routerProps}
            />
          )}
        />
        <Route
          exact
          path={"/email_form"}
          render={routerProps => (
            <EmailForm
              receiver={this.state.receiver}
              user={this.props.user}
              {...routerProps}
            />
          )}
        />
        {/* <CatCard /> */}
      </>
    );
  }
}

export default MainPage;
