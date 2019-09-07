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

  renderContent = () => {
    if (this.props.cat && this.state.editClicked) {
      return (
        <EditCatCard
          handleSubmit={this.props.handleSubmit}
          cat={this.props.cat}
          handleEdit={this.handleEdit}
          cancelChanges={this.props.cancelChanges}
          updateUserState={this.props.updateUserState}
          updateCatCat={this.props.updateCatCat}
        />
      );
    }
  };

  render() {
    const cat = this.props.cat;

    return (
      <Card>
        <Image wrapped ui={false} src={cat.image} size="small" />
        <Card.Content>
          <Card.Header>
            {cat.name} <Icon name="paw" />
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Card.Description>{cat.description}</Card.Description>
        </Card.Content>
        <Card.Content>
          <Button onClick={() => this.props.deleteCat(cat.id)}>
            Delete Cat
          </Button>
          <Button onClick={() => this.handleEdit()}>Edit</Button>
          {this.renderContent()}
        </Card.Content>
      </Card>
    );
  }
}

export default UserCatCard;
