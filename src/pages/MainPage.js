import React from "react";
import NavBar from "../components/NavBar";
import Menu from "../components/Menu";
import { Route } from "react-router-dom";
import Profile from "../components/Profile";
// import CatContainer from '../components/CatContainer';
import CatForm from "../components/CatForm";
import CatContainer from "../containers/CatContainer";
import API from "../adapters/API";

class MainPage extends React.Component {
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
            <Profile user={this.props.user}  routerProps={routerProps} />
          )}
        />
        <Route
          path={"/add-cat"}
          render={routerProps => (
            <CatForm success={this.props.success} user={this.props.user} routerProps={routerProps}  />
          )}
        />
        <Route
          exact
          path={"/"}
          render={routerProps => (
            <CatContainer user={this.props.user} {...routerProps} />
          )}
        />
        {/* <CatCard /> */}
      </>
    );
  }
}

export default MainPage;
