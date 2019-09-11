import React from "react";
import NavBar from "../components/NavBar";
import { Route } from "react-router-dom";
import Profile from "../components/Profile";
import CatForm from "../components/CatForm";
import EmailForm from "../components/EmailForm";
import CatContainer from "../containers/CatContainer";
import API from "../adapters/API";

class MainPage extends React.Component {
  state = {
    receiver: "",
    search: "",
    cats: []
  };

  componentDidMount() {
    if (localStorage.token) {
      API.fetchCats().then(data =>
        this.setState({
          cats: data
        })
      );
    } else {
      this.props.history.push("/login");
    }
  }

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

  updateCatState = cat => {
    if (!this.state.cats.includes(cat))
      this.setState({ cats: [...this.state.cats, cat] });
    // if (!this.state.cats.filter(c => c.id === cat.id).length) {
    //   let cats = this.state.cats.filter(c => c.id !== cat.id);
    //   cats.push(cat);
    //   this.setState({ cats: [...this.state.cats, cat] });
  };
  //   if (!!this.props.user.cats.filter(c => c.id === cat.id).length) {
  //     let cats = this.props.user.cats.filter(c => c.id !== cat.id);
  //     const { email, id, address, username, _userCats } = this.props.user;
  //     cats.push(cat);
  //     this.setState({ user: { email, id, address, username, cats } });
  //   }
  // };

  editCatInArray = updatedCat => {
    const newArray = this.state.cats.map(c =>
      c.id === updatedCat.id ? updatedCat : c
    );
    this.setState({
      cats: newArray
    });
  };

  deleteCat = id => {
    API.deleteCat(id).then(data => {
      const newCatArray = this.state.cats.filter(
        cat => cat.id !== data.deleted_cat_id
      );
      this.setState({
        cats: newCatArray
      });
    });
  };

  filterCats = () => {
    return this.state.cats.filter(cat => cat.user.id !== this.props.user.id);
  };

  filterUserCats = () => {
    return this.state.cats.filter(cat => cat.user.id === this.props.user.id);
  };

  // filterSearch = () => {
  //   if (this.state.search) {
  //     return this.state.cats.filter(cat =>
  //       cat.address.toLowerCase().includes(this.state.search.toLowerCase())
  //     );
  //   }
  //   return this.props.cats;
  // };

  render() {
    if (!this.props.user) return <div></div>;
    return (
      <>
        {/*  */}
        <Route
          path={"/"}
          render={routerProps => (
            <NavBar
              routerProps={routerProps}
              logOut={this.props.logOut}
              user={this.props.user}
            />
          )}
        />
        <Route
          path={"/profile"}
          render={routerProps => (
            <Profile
              updateCatState={this.updateCatState}
              editCatInArray={this.editCatInArray}
              cats={this.filterUserCats()}
              user={this.props.user}
              deleteCat={this.deleteCat}
              {...routerProps}
            />
          )}
        />
        <Route
          path={"/add-cat"}
          render={routerProps => (
            <CatForm
              updateCatState={this.updateCatState}
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
              updateCatState={this.updateCatState}
              cats={this.filterCats()}
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
