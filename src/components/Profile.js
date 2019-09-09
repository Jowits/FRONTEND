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
        {/* // <Grid centered verticalAlign="middle" container columns="equal" stackable>
      //   <Grid.Row stretched>
      //     <Grid.Column> */}
        <Card.Group className="profile">
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
        </Card.Group>
        {/* // <Grid.Row stretched>
            //   <Grid.Column> */}
        <Card.Group className="catCards">
          {this.props.user.cats.map(cat => (
            <UserCatCard
              updateUserState={this.props.updateUserState}
              cat={cat}
              key={cat.id}
              deleteCat={this.props.deleteCat}
            />
          ))}
        </Card.Group>
        {/* </Grid.Column>
            </Grid.Row> */}
        {/* //     </Grid.Column>
      //   </Grid.Row>
      // </Grid> */}
      </>
    );
  }
}

export default Profile;
