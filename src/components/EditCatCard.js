import React, { Component } from "react";
import { Form, Input, Button, TextArea } from "semantic-ui-react";

const catsUrl = "http://localhost:3000/api/v1/cats";

class EditCatCard extends Component {
  state = {
    id: this.props.cat.id,
    image: this.props.cat.image,
    name: this.props.cat.name,
    address: this.props.cat.address,
    description: this.props.cat.description
  };

  componentDidUpdate() {
    if (this.props.cat.id !== this.state.id) {
      this.setState({
        id: this.props.cat.id,
        image: this.props.cat.image,
        name: this.props.cat.name,
        address: this.props.cat.address,
        description: this.props.cat.description
      });
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch(catsUrl + `/${this.state.id}`, {
      method: "PATCH",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        id: this.state.id,
        image: this.state.image,
        name: this.state.name,
        address: this.state.address,
        description: this.state.description
      })
    })
      .then(resp => resp.json())
      .then(resp => this.props.updateUserState(resp));
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="note-editor">
        <Form.Field>
          <label className="catForm">Image</label>
          <Input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label className="catForm">Name</label>
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Input
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label className="catForm">Description</label>
          <TextArea
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button value="Submit" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default EditCatCard;
