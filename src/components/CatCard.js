import React from "react";

import {
  Card,
  Icon,
  Image,
  Button,
  Form,
  Comment,
  Header
} from "semantic-ui-react";
import API from "../adapters/API";

class CatCard extends React.Component {
  state = {
    text: "",
    cat_id: null,
    cat: null,
    toggleShowDetails: false,
    reviews: [],
    user: {}
  };

  componentDidMount() {
    this.setState({
      cat_id: this.props.cat.id,
      cat: this.props.cat,
      user: this.props.user
    });
    API.fetchReviews().then(reviews => this.setState({ reviews }));
  }

  setReceiverAndRedirect = user => {
    this.props.setReceiver(user);
    this.props.history.push("/email_form");
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const newReview = this.state;
    API.createReview(newReview).then(() => {
      this.setState({ reviews: [...this.state.reviews, newReview] });
    });
  };

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
                Reviews
              </Header>
              <Comment.Content>
                <Comment.Content>
                  {this.state.reviews
                    .filter(review => review.cat.id === this.state.cat.id)
                    .map(review => (
                      <h4>
                        <Comment.Author>{review.user.username}</Comment.Author>{" "}
                        <Comment.Text>{review.text}</Comment.Text>
                      </h4>
                    ))}
                </Comment.Content>
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
        <Card.Group className="profile">
          <Card color="orange" raised fluid>
            <Image wrapped ui={false} src={this.props.cat.image} size="small" />
            <Card.Content>
              <Card.Header textAlign="center">
                <h2>{this.props.cat.name}</h2>
              </Card.Header>
              <Card.Content>
                <Card.Description textAlign="center">
                  <h3>{this.props.cat.user.address}</h3>
                  <Icon name="paw" />
                </Card.Description>
              </Card.Content>
              <Card.Content>
                <Card.Description textAlign="center">
                  <h4>{this.props.cat.description}</h4>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  fluid
                  onClick={() =>
                    this.setReceiverAndRedirect(this.props.cat.user)
                  }
                >
                  Book Cat!
                </Button>
              </Card.Content>
              <Card.Content>
                <Button fluid onClick={this.toggleShowDetails}>
                  {this.state.showDetails ? "hide" : "Review me!"}
                </Button>
                <div>{this.state.showDetails && this.bookCat()}</div>
              </Card.Content>
            </Card.Content>
          </Card>
        </Card.Group>
      </>
    );
  }
}
export default CatCard;
