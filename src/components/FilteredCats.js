import React from "react";
import CatCard from "../components/CatCard";
import { Card, Grid } from "semantic-ui-react";

class FilteredCats extends React.Component {
  render() {
    const { history, location, match } = this.props;
    const routerProps = { history, location, match };
    return (
      <Grid columns={3}>
        <Grid.Column />
        <Grid.Column>
          <Card.Group centered itemsPerRow={3}>
            {this.props.cats.map(cat => (
              <CatCard
                setReceiver={this.props.setReceiver}
                key={cat.id}
                cat={cat}
                {...routerProps}
              />
            ))}
          </Card.Group>
        </Grid.Column>
        <Grid.Column />
      </Grid>
    );
  }
}

export default FilteredCats;
