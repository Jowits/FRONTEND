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
      <>
        <Card.Group
          style={{
            position: "relative",
            top: "-5px",
            margin: "3.5em",
            width: "25em",
            height: "26em"
          }}
          className="profile"
        >
          <Card fluid>
            <Card.Content>
              <Card.Header style={{ margin: "1em" }}>
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
              <Card.Description style={{ fontSize: "1em" }}>
                {this.state.userProfile.user.email}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href="#">
                <Icon name="paw" />
              </a>
            </Card.Content>
          </Card>
        </Card.Group>
        <Card.Group
          style={{
            width: "100em",
            position: "relative",
            float: "right"
          }}
          className="catCards"
        >
          {this.props.cats.map(cat => (
            <UserCatCard
              editCatInArray={this.props.editCatInArray}
              filterUserCats={this.props.filterUserCats}
              cat={cat}
              key={cat.id}
              deleteCat={this.props.deleteCat}
              updateCatState={this.props.updateCatState}
            />
          ))}
        </Card.Group>
      </>
    );
  }
}

export default Profile;
