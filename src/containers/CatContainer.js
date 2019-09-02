import React from "react";
import API from "../adapters/API.js";
import FilteredCats from "../components/FilteredCats";
import { Route } from "react-router-dom";
import CatCard from "../components/CatCard.js";

class CatContainer extends React.Component {
  state = {
    cats: [],
    search: ""
  };

  componentDidMount() {
    API.fetchCats().then(cats => this.setState({ cats }));
  }

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
    const { history, location, match } = this.props;
    const routerProps = { history, location, match };

    return (
      <div>
        <FilteredCats
          setReceiver={this.props.setReceiver}
          cats={this.state.cats}
          {...routerProps}
        />
      </div>
    );
  }
}

export default CatContainer;
