import React from "react";
import { Button, Form, Grid } from "semantic-ui-react";
import API from "../adapters/API";

class CatForm extends React.Component {
  state = {
    image: "",
    name: "",
    address: "",
    description: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const cat = this.state;
    this.props.updateUserState(this.state);
    this.props.updateCatCat(this.state);
    this.props.history.push("/");
    API.createCat(cat);
  };

  render() {
    return (
      <>
        <Grid centered columns={2}>
          <Grid.Column>
            <Form onSubmit={() => this.handleSubmit(this.state)}>
              <Form.Field>
                <label style={{ fontSize: "1.5em", margin: "0.5em" }}>
                  Image
                </label>
                <input
                  style={{ height: "4em" }}
                  name="image"
                  placeholder="Image"
                  value={this.state.image}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label style={{ fontSize: "1.5em", margin: "0.5em" }}>
                  Name
                </label>
                <input
                  style={{ height: "4em" }}
                  name="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label style={{ fontSize: "1.5em", margin: "0.5em" }}>
                  Area
                </label>
                <input
                  style={{ height: "4em" }}
                  name="address"
                  placeholder="Area"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label style={{ fontSize: "1.5em", margin: "0.5em" }}>
                  Description
                </label>
                <input
                  style={{ height: "4em" }}
                  name="description"
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Button
                style={{ fontSize: "2em", paddingBottom: "0.5em" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default CatForm;
