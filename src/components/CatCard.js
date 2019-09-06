import React from "react";
import { Route } from "react-router-dom";
import {
  Card,
  Icon,
  Image,
  Button,
  Grid,
  Form,
  Comment,
  Header
} from "semantic-ui-react";
import API from "../adapters/API";

class CatCard extends React.Component {
  state = {
    text: "",
    cat_id: null,
    toggleShowDetails: false,
    reviews: []
  };

  componentDidMount() {
    this.setState({ cat_id: this.props.cat.id });
    API.fetchReviews().then(reviews => this.setState({ reviews }));
  }

  setReceiverAndRedirect = user => {
    this.props.setReceiver(user);
    this.props.history.push("/email_form");
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = review => {
    const newReview = this.state;
    API.createReview(newReview);
    if (!this.state.reviews.includes(review))
      this.setState({ text: [...this.state.reviews, review] });
  };

  // updateUserState = cat => {
  //   if (!this.state.user.cats.includes(cat))
  //     this.setState({ cats: [...this.state.user.cats, cat] });
  // };

  toggleShowDetails = () =>
    this.setState({ showDetails: !this.state.showDetails });

  bookCat = () => {
    return (
      <Card>
        <Card.Content>
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
          <Comment.Group>
            <Comment>
              <Header as="h3" dividing>
                Comments
              </Header>
              <Comment.Content>
                <Comment.Author>
                  <h3>{this.props.cat.user.username}</h3>
                </Comment.Author>
                <Comment.Text>
                  {this.props.cat.reviews.map(review => (
                    <h4>{review.text}</h4>
                  ))}
                </Comment.Text>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Card.Content>
      </Card>
    );
  };
  render() {
    if (!this.props.cat) return <div></div>;
    return (
      <>
        <Grid.Column className="catCard" width={3}>
          <Card>
            <Image wrapped ui={false} src={this.props.cat.image} size="small" />
            <Card.Content>
              <Card.Header>
                {this.props.cat.name} <Icon name="paw" />
              </Card.Header>
              <Card.Content>
                <Card.Description>
                  {this.props.cat.description}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  onClick={() =>
                    this.setReceiverAndRedirect(this.props.cat.user)
                  }
                >
                  Book Cat!
                </Button>
                <Button onClick={this.toggleShowDetails}>
                  {this.state.showDetails ? "hide" : "Review me!"}
                </Button>
                <div>{this.state.showDetails && this.bookCat()}</div>
              </Card.Content>
            </Card.Content>
          </Card>
        </Grid.Column>
      </>
    );
  }
}
export default CatCard;
