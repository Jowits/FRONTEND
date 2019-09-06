import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



const MenuPage = ({logOut, user}) => {
    if (!user) return <div></div>
    return (
        <div>
            <Menu vertical floated="right" >
                <Menu.Item >  <Link to={`/profile/${user.id}`}> Manage your account </Link>  </Menu.Item>
                <Menu.Item >  <Link to={`/add-cat`}> Add cat profile </Link>  </Menu.Item>
                {/* <Menu.Item >  </Menu.Item> */}
                <Menu.Item onClick={logOut}> Logout </Menu.Item>
            </Menu>
        </div>

    )
}

export default MenuPage
