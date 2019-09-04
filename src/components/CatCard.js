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
    toggleShowDetails: false
  };

  componentDidMount() {
    this.setState({ cat_id: this.props.cat.id });
  }

  setReceiverAndRedirect = user => {
    this.props.setReceiver(user);
    this.props.history.push("/email_form");
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const review = this.state;
    API.createReview(review).then(window.location.reload());
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
                <Comment.Author as="a">{}</Comment.Author>
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
        <Card >
          <Image wrapped ui={false}  src={this.props.cat.image} size='small'/>
          <Card.Content>
            <Card.Header>
              {this.props.cat.name} <Icon name="paw" />
            </Card.Header>
            <Card.Content>
              <Card.Description>{this.props.cat.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button
                onClick={() => this.setReceiverAndRedirect(this.props.cat.user)}
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
