import React from "react";
import { Route } from "react-router-dom";
import {
  Card,
  Icon,
  Image,
  Button,
  Rating,
  Grid,
  Form
} from "semantic-ui-react";
import API from "../adapters/API";

class CatCard extends React.Component {
  state = {
    text: "",
    cat_id: this.props.cat.id,
    toggleShowDetails: false
  };

  setReceiverAndRedirect = user => {
    this.props.setReceiver(user) 
    this.props.history.push("/email_form")
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const review = this.state;
    API.createReview(review).then(() => this.props.history.push("/"));
  };

  // filterUserCats = () => {
  //      this.props.cats.filter(cat => cat.user_id === this.props.user_id)
  // }

  //   catMenu = () =>  _.map(this.state.cat_id, (state, index) => ({
  //   key: addressDefinitions.state_abbr[index],
  //   text: name,
  //   value: addressDefinitions.state_abbr[index],
  // }))
  toggleShowDetails = () =>
    this.setState({ showDetails: !this.state.showDetails });

  bookCat = () => {
    return (
      <Card>
        <Card.Content extra>
          <Form reply onSubmit={() => this.handleSubmit(this.state)}>
            <Form.TextArea
              name="text"
              placeholder="text"
              value={this.state.text}
              onChange={this.handleChange}
            />
            <Button
              content="Submit Review"
              labelPosition="left"
              icon="edit"
              primary
            />
          </Form>
        </Card.Content>
      </Card>
    );
  };
  render() {
    return (
      <>
        <Grid container columns={3}>
          <Grid.Column>
            <Card>
              <Image src={this.props.cat.image} wrapped ui={false} />
              <Card.Content>
                <Card.Header>
                  {this.props.cat.name} <Icon name="paw" />
                </Card.Header>
                <Card.Description>
                  {this.props.cat.description}
                </Card.Description>
                <Card.Content extra>
                  <Button onClick={() => this.setReceiverAndRedirect(this.props.cat.user)}>
                    Book Play_Date!
                  </Button>
                  <Button onClick={this.toggleShowDetails}>
                    {this.state.showDetails ? "hide" : "Review me!"}
                  </Button>
                  <div>{this.state.showDetails && this.bookCat()}</div>
                </Card.Content>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}
export default CatCard;
