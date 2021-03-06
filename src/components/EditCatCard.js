import React, { Component } from "react";
import { Form, Input, Button, TextArea } from "semantic-ui-react";

const catsUrl = "https://catz-play-api-app.herokuapp.com/api/v1/cats";

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
      .then(resp => this.props.editCatInArray(resp));
  };

  render() {
    return (
      <Form.Dropdown
        style={{
          background: "white",
          border: "solid",
          borderRadius: "0.2em",
          borderWidth: "1px",
          borderColor: "rgb(224, 84, 18)",
          width: "11.2em",
          padding: "0.3em"
        }}
        onSubmit={this.handleSubmit}
        className="note-editor"
      >
        <Form>
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
            <label className="catForm">Description</label>
            <TextArea
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button centered value="Submit" type="submit">
            Submit
          </Button>
        </Form>
      </Form.Dropdown>
    );
  }
}

export default EditCatCard;
