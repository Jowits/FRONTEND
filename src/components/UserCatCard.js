import React, { Component } from "react";
import { Card, Icon, Button, Image } from "semantic-ui-react";
import EditCatCard from "../components/EditCatCard";

class UserCatCard extends Component {
  state = {
    editClicked: false
  };

  handleEdit = () => {
    this.setState({ editClicked: !this.state.editClicked });
  };
  // editing cat card
  renderContent = () => {
    if (this.props.cat && this.state.editClicked) {
      return (
        <EditCatCard
          handleSubmit={this.props.handleSubmit}
          editCatInArray={this.props.editCatInArray}
          cat={this.props.cat}
          handleEdit={this.handleEdit}
          filterUserCats={this.props.filterUserCats}
          updateCatState={this.props.updateCatState}
        />
      );
    }
  };

  render() {
    const cat = this.props.cat;

    return (
      <>
        <Card.Group size="medium" className="profile">
          <Card
            style={{
              display: "block",
              height: "16em",
              width: "15em"
            }}
            color="orange"
            fluid
          >
            <Card.Content>
              <Image wrapped ui={false} src={cat.image} />
              <Card.Content>
                <Card.Header textAlign="center">
                  <h2>{cat.name}</h2>
                </Card.Header>
              </Card.Content>
              <Card.Content>
                <Card.Description textAlign="center">
                  <h3>{cat.address}</h3>
                  <Icon name="paw" />
                </Card.Description>
              </Card.Content>
              <Card.Content>
                <Card.Description
                  style={{ margin: "0.5em" }}
                  textAlign="center"
                >
                  <h4>{cat.description}</h4>
                </Card.Description>
              </Card.Content>
              <Card.Content>
                <Button
                  style={{ margin: "0.1em", fontSize: "0.7em" }}
                  onClick={() => this.props.deleteCat(cat.id)}
                >
                  Delete Cat
                </Button>
                <Button
                  style={{ margin: "0.1em", fontSize: "0.7em" }}
                  onClick={() => this.handleEdit()}
                >
                  Edit
                </Button>
                {this.renderContent()}
              </Card.Content>
            </Card.Content>
          </Card>
        </Card.Group>
      </>
    );
  }
}

export default UserCatCard;
