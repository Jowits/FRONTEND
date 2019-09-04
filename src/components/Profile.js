import React from "react";
import { Card, Icon, Label, Grid, Image, Button } from "semantic-ui-react";
import API from "../adapters/API";

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

  deleteCat = () => {
    API.deleteCat(this.state.userProfile.user.cats[0].id).then(() => this.props.history.push(`/`))
}

  render() {
    if (!this.props.user || !this.state.userProfile) return <div></div>;
    return (
      <Card.Group columns={3} className="profile">
        <Card fluid>
          {/* <Image src='' wrapped ui={false} /> */}
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
            {/* <Card.Content>{this.state.userProfile.user}</Card.Content> */}
          </Card.Content>
          <Card.Content extra>
            <a href="#">
              <Icon name="paw" />
            </a>
          </Card.Content>
          {}
        </Card>
        <Card>
          <Image
            wrapped
            ui={false}
            src={this.props.user.cats[0].image}
            size="small"
          />
          <Card.Content>
            <Card.Header>
              {this.props.user.cats[0].name} <Icon name="paw" />
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Card.Description>
              {this.props.user.cats[0].description}
            </Card.Description>
          </Card.Content>
          <Card.Content>
            <Button onClick={this.deleteCat} >Delete Cat</Button>
          </Card.Content>
        </Card>
        {/* <Card >
          <Image wrapped ui={false}  src={this.props.user.cats[1].image} size='small'/>
          <Card.Content>
            <Card.Header>
              {this.props.user.cats[1].name} <Icon name="paw" />
            </Card.Header>
            </Card.Content>
            <Card.Content>
              <Card.Description>{this.props.user.cats[1].description}</Card.Description>
            </Card.Content>
        </Card> */}
      </Card.Group>
    );
  }
}

export default Profile;
