import React from "react";
import CatCard from "../components/CatCard";
import { Card, Grid, Checkbox } from "semantic-ui-react";

class FilteredCats extends React.Component {
  render() {
    const { history, location, match } = this.props;
    const routerProps = { history, location, match };
    return (
      <>
        {" "}
        <Grid centered container columns="equal" stackable>
          {" "}
          <Grid.Row stretched rows="equal">
            {" "}
            <Grid.Column>
              <Checkbox toggle />
              <Card.Group>
                {this.props.cats.map(cat => (
                  <CatCard
                    user={this.props.user}
                    setReceiver={this.props.setReceiver}
                    key={cat.id}
                    cat={cat}
                    {...routerProps}
                  />
                ))}
              </Card.Group>{" "}
            </Grid.Column>{" "}
          </Grid.Row>{" "}
        </Grid>
      </>
    );
  }
}

export default FilteredCats;
