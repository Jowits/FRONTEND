import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import API from '../adapters/API'

class Profile extends React.Component {

    state = {
        userProfile: ""
    }

    componentDidMount(){
        const profileID = this.props.routerProps.match.params.id
        API.fetchProfile(profileID).then(userProfile => this.setState({userProfile}))
    }


    render(){
        if (!this.props.user || !this.state.userProfile) return <div></div>
        return(
            <Card>
            {/* <Image src='' wrapped ui={false} /> */}
            <Card.Content>
            <Card.Header>{this.state.userProfile.user.username}</Card.Header>
            <Card.Meta>
                <span className='date'></span>
            </Card.Meta>
            <Card.Description>
                {this.state.userProfile.user.address}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='paw' />
               
            </a>
            </Card.Content>
            {}
        </Card>
        )
    }
}

export default Profile