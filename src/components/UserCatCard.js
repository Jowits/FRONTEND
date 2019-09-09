import React, { Component } from "react";
import { Card, Icon, Button, Image, Grid } from "semantic-ui-react";
import EditCatCard from "../components/EditCatCard";

class UserCatCard extends Component {
  state = {
    editClicked: false
  };

  handleEdit = () => {
    this.setState({ editClicked: !this.state.editClicked });
  };

  renderContent = () => {
    if (this.props.cat && this.state.editClicked) {
      return (
        <EditCatCard
          handleSubmit={this.props.handleSubmit}
          cat={this.props.cat}
          handleEdit={this.handleEdit}
          cancelChanges={this.props.cancelChanges}
          updateUserState={this.props.updateUserState}
        />
      );
    }
  };

  render() {
    const cat = this.props.cat;

    return (
      <>
        <Card.Group
          style={{ margin: "2em", display: "block" }}
          size="medium"
          className="profile"
        >
          <Card style={{ height: "20em", width: "20em" }} color="orange" fluid>
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
                <Card.Description textAlign="center">
                  <h4>{cat.description}</h4>
                </Card.Description>
              </Card.Content>
              <Card.Content>
                <Button onClick={() => this.props.deleteCat(cat.id)}>
                  Delete Cat
                </Button>
                <Button onClick={() => this.handleEdit()}>Edit</Button>
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
