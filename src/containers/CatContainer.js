import React from "react";
import API from "../adapters/API.js";
import FilteredCats from "../components/FilteredCats";

class CatContainer extends React.Component {
  render() {
    const { history, location, match } = this.props;
    const routerProps = { history, location, match };

    return (
      <div>
        <FilteredCats
          user={this.props.user}
          setReceiver={this.props.setReceiver}
          cats={this.props.cats}
          {...routerProps}
        />
      </div>
    );
  }
}

export default CatContainer;
