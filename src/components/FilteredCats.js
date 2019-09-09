import React from "react";
import CatCard from "../components/CatCard";
import { Card, Grid, Checkbox } from "semantic-ui-react";

class FilteredCats extends React.Component {
  render() {
    const { history, location, match } = this.props;
    const routerProps = { history, location, match };
    return (
      <>
        {this.props.cats.map(cat => (
          <CatCard
            user={this.props.user}
            updateUserState={this.props.updateUserState}
            setReceiver={this.props.setReceiver}
            key={cat.id}
            cat={cat}
            {...routerProps}
          />
        ))}
      </>
    );
  }
}

export default FilteredCats;
