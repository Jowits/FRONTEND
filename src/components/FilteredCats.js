import React from "react";
import CatCard from "../components/CatCard";


class FilteredCats extends React.Component {
  render() {
    return (
      <div>
        {this.props.cats.map(cat => (
          <CatCard key={cat.id} cat={cat}  />
        ))}
      </div>
    );
  }
}

export default FilteredCats;
