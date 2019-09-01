import React from "react";
import { Card, Icon, Image, Button, Rating, Grid, Form } from "semantic-ui-react";
import API from "../adapters/API";


class CatCard extends React.Component {

  state = {
    text: "",
    cat_id: this.props.cat.id
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    debugger
    const review =  this.state
    API.createReview(review)
    .then(() => this.props.history.push("/"))
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
            <Rating vertical icon="heart" defaultRating={1} maxRating={3} />
            <Card.Description>{this.props.cat.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button>Play-date Time!</Button>
          </Card.Content>
          <Card.Content extra>
            <Form reply onSubmit={() => this.handleSubmit(this.state)} >
              <Form.TextArea
              name="text"
              placeholder="text"
              value={this.state.text}
              onChange={this.handleChange}/>
              <Button 
                content="Submit Review"
                labelPosition="left"
                icon="edit"
                primary
              />
            </Form>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  </>
);
}

}
export default CatCard;
