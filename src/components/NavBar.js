import React from "react";
import { Menu, Input, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NavBar = ({ logOut, user }) => {
  return (
    <div className="ui inverted  menu navbar">
      <div className="ui item catzButton">
        {" "}
        <Link to={`/`}> Catz-Play </Link>{" "}
      </div>
      <div className="right menu">
        <Menu.Item>
          <Input icon="search" placeholder="Search cats..." />
        </Menu.Item>
        <Dropdown text="Menu">
          <Dropdown.Menu>
            <Dropdown.Item text="Manage your account">
              <Link to={`/profile/${user.id}`}> </Link>
            </Dropdown.Item>
            <Dropdown.Item text="Open..." description="ctrl + o" />
            <Dropdown.Item text="Save as..." description="ctrl + s" />
            <Dropdown.Item text="Rename" description="ctrl + r" />
          </Dropdown.Menu>
        </Dropdown>
        <div className="ui item">
          {" "}
          <Link to={`/menu`}> Menu</Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
