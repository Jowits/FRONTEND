import React from "react";
import { Button, Form, Grid } from "semantic-ui-react";
import CatCard from "../components/CatCard";
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
    const cat = this.state
    API.createCat(cat)
    .then(() => this.props.history.push("/"))
    
  };

  //   const [image, setImage] = useState('')
  //   const [name, setName] = useState('')
  //   const [address, setAddress] = useState('')
  //   const [description, setDescription] = useState('')
  render() {
    return (
      <>
        <Grid centered columns={2}>
          <Grid.Column>
            <Form onSubmit={() => this.handleSubmit(this.state)}>
              <Form.Field>
                <label>Image</label>
                <input
                  name="image"
                  placeholder="Image"
                  value={this.state.image}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Name</label>
                <input
                  name="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Area</label>
                <input
                  name="address"
                  placeholder="Area"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Description</label>
                <input
                  name="description"
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Button type="submit">Submit</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default CatForm;
