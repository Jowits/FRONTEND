import React from 'react';
import NavBar from '../components/NavBar';
import Menu from '../components/Menu';
import { Route } from 'react-router-dom';
import Profile from '../components/Profile'

class MainPage extends React.Component {
    
    render() {
        if (!this.props.user) return <div></div>
        return (
            <>
            <NavBar />
            <Route path={"/menu"} render={routerProps => <Menu routerProps={routerProps} logOut={this.props.logOut} user={this.props.user}/>} />
            <Route path={"/profile/:id"} render={routerProps => <Profile user={this.props.user} routerProps={routerProps}/>} />
                
            </>
        );
    }
}

export default MainPage;