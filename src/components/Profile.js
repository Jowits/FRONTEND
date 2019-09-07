import React from "react";
import { Card, Icon } from "semantic-ui-react";
import API from "../adapters/API";
import UserCatCard from "../components/UserCatCard";

class Profile extends React.Component {
  state = {
    userProfile: ""
  };

  componentDidMount() {
    const profileID = this.props.user.id;
    API.fetchProfile(profileID).then(userProfile =>
      this.setState({ userProfile })
    );
  }

  render() {
    if (!this.props.user || !this.state.userProfile) return <div></div>;
    return (
      <Card.Group columns={3} className="profile">
        <Card fluid>
          <Card.Content>
            <Card.Header>
              <label className="label">Username:</label>
              {this.state.userProfile.user.username}
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Card.Description>
              <label className="label">Area:</label>
              {this.state.userProfile.user.address}
            </Card.Description>
          </Card.Content>
          <Card.Content>
            <label className="label">Email:</label>
            <Card.Description>
              {this.state.userProfile.user.email}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href="#">
              <Icon name="paw" />
            </a>
          </Card.Content>
        </Card>
        {this.props.user.cats.map(cat => (
          <UserCatCard cat={cat} deleteCat={this.props.deleteCat} />
        ))}
      </Card.Group>
    );
  }
}

export default Profile;
