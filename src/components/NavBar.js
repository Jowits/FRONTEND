import React from 'react';
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const NavBar = (props) => {
        return (
            
        <div className="ui inverted  menu">
            <div className="ui item"> <Link to={`/`}> Catz-Play </Link> </div>
            <div className="right menu">
                <div className="ui item"> <Link to={`/search`}> <Icon name='search'/> </Link> </div>
                <div className="ui item"> <Link to={`/menu`}> <Icon name='bars'/> </Link> </div>
            </div>
        </div>

                
           
        );
    
}

export default NavBar;