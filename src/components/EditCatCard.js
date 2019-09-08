import React, { Component } from "react";
import { Button, Form, Input, TextArea } from "semantic-ui-react";

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
    // e.preventDefault();
    return fetch(catsUrl + `/${this.state.id}`, {
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
    }).then(resp => resp.json());
    // .then(resp => this.updateUserState(resp))
    // .then(resp => this.updateCatCat(resp));
  };

  render() {
    return (
      <Form
        onSubmit={() => this.handleSubmit(this.state)}
        className="note-editor"
      >
        <Form.Field>
          <Input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
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
          <TextArea
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </Form.Field>
        <div className="button-row">
          <Input className="button" type="submit" value="Save" />
        </div>
      </Form>
    );
  }
}

export default EditCatCard;
