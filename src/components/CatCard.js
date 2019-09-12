import React from "react";

import {
  Card,
  Icon,
  Image,
  Button,
  Form,
  Comment,
  Header,
  Segment
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
      <Segment style={{ background: "white", zIndex: "1" }}>
        <Comment.Group style={{ background: "white", borderColor: "orange" }}>
          <Form reply onSubmit={() => this.handleSubmit(this.state)}>
            <Form.TextArea
              style={{ width: "20em", height: "8em" }}
              name="text"
              placeholder="Review"
              value={this.state.text}
              onChange={this.handleChange}
            />
            <Button size="large" value="Submit" type="submit">
              Submit
            </Button>
          </Form>

          <Comment>
            <Header as="h2" dividing>
              Reviews
            </Header>
            <Comment.Content>
              <Comment.Content>
                {this.state.reviews
                  .filter(review => review.cat.id === this.state.cat.id)
                  .map(review => (
                    <h4>
                      <Comment.Author style={{ color: "#FF7F11" }}>
                        {review.user.username}
                      </Comment.Author>{" "}
                      <Comment.Text>{review.text}</Comment.Text>
                    </h4>
                  ))}
              </Comment.Content>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      </Segment>
    );
  };
  render() {
    if (!this.props.cat) return <div></div>;
    return (
      <>
        <Card.Group fluid centered className="profile">
          <Card
            style={{
              height: "23em",
              width: "19em",
              top: "0.5em"
            }}
            color="orange"
          >
            <Image wrapped ui={false} src={this.props.cat.image} />
            <Card.Content>
              <Card.Header textAlign="center">
                <h1>{this.props.cat.name}</h1>
              </Card.Header>
              <Card.Content>
                <Card.Description textAlign="center">
                  <h3>{this.props.cat.user.address}</h3>
                  <Icon name="paw" />
                </Card.Description>
              </Card.Content>
              <Card.Content>
                <Card.Description textAlign="center">
                  <h3>{this.props.cat.description}</h3>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button
                  style={{ width: "10em" }}
                  onClick={() =>
                    this.setReceiverAndRedirect(this.props.cat.user)
                  }
                >
                  Book a date!
                </Button>
              </Card.Content>
              <Card.Content>
                <Button
                  style={{ width: "10em" }}
                  flex
                  onClick={this.toggleShowDetails}
                >
                  {this.state.showDetails ? "hide" : "Review me!"}
                </Button>
                {this.state.showDetails && this.bookCat()}
              </Card.Content>
            </Card.Content>
          </Card>
        </Card.Group>
      </>
    );
  }
}
export default CatCard;
