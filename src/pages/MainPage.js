import React from "react";
import NavBar from "../components/NavBar";
import Menu from "../components/Menu";
import { Route } from "react-router-dom";
import Profile from "../components/Profile";
import CatForm from "../components/CatForm";
import EmailForm from "../components/EmailForm";
import CatContainer from "../containers/CatContainer";
import API from "../adapters/API.js";

class MainPage extends React.Component {
  state = {
    receiver: "",
    search: ""
  };

  setsReceiver = user => {
    this.setState({
      receiver: user
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  filterSearch = () => {
    if (this.state.search) {
      return this.state.cats.filter(cat =>
        cat.address.toLowerCase().includes(this.state.search.toLowerCase())
      );
    }
    return this.props.cats;
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
            <Profile
              cats={this.props.cats}
              user={this.props.user}
              deleteCat={this.props.deleteCat}
              {...routerProps}
            />
          )}
        />
        <Route
          path={"/add-cat"}
          render={routerProps => (
            <CatForm
              updateUserState={this.props.updateUserState}
              updateCatCat={this.props.updateCatCat}
              cats={this.props.cats}
              user={this.props.user}
              {...routerProps}
            />
          )}
        />
        <Route
          exact
          path={"/"}
          render={routerProps => (
            <CatContainer
              cats={this.props.cats}
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
      </>
    );
  }
}

export default MainPage;
