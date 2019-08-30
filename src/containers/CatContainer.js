import React from "react";
import API from "../adapters/API.js";
import { Route } from "react-router-dom";
import CatCard from "../components/CatCard";
import MainPage from "../pages/MainPage.js";

class CatContainer extends React.Component {
  state = {
    cats: []
  };

  componentDidMount() {
    API.fetchCats().then(cats => this.setState({ cats }));
  }

  

  render() {
    return (
      <div>
        {this.state.cats.map(cat => (
          <CatCard key={cat.id} cat={cat} />
        ))}
      </div>
    );
  }
}

export default CatContainer;
