import React from "react";
import FilteredCats from "../components/FilteredCats";

class CatContainer extends React.Component {
  render() {
    const { history, location, match } = this.props;
    const routerProps = { history, location, match };

    return (
      <div>
        <FilteredCats
          updateUserState={this.props.updateUserState}
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
