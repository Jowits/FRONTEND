import React from "react";
import CatCard from "../components/CatCard";
import { Card, Grid } from "semantic-ui-react";

class FilteredCats extends React.Component {
  render() {
    const { history, location, match } = this.props;
    const routerProps = { history, location, match };
    return (
      <Grid>
        <Grid.Row centered columns={3}>
          <Grid.Column>
            <Card.Group centered itemsPerRow={4}>
              {this.props.cats.map(cat => (
                <CatCard
                  user={this.props.user}
                  setReceiver={this.props.setReceiver}
                  key={cat.id}
                  cat={cat}
                  {...routerProps}
                />
              ))}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default FilteredCats;
