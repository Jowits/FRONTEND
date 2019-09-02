import React from "react";
import CatCard from "../components/CatCard";

class FilteredCats extends React.Component {
  render() {
    const { history, location, match } = this.props;
    const routerProps = { history, location, match };
    return (
      <div>
        {this.props.cats.map(cat => (
          <CatCard
            setReceiver={this.props.setReceiver}
            key={cat.id}
            cat={cat}
            {...routerProps}
          />
        ))}
      </div>
    );
  }
}

export default FilteredCats;
