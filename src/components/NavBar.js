import React from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NavBar = ({ logOut, user }) => {
  return (
    <div className="ui inverted  menu navbar">
      <div className="ui item catzButton">
        {" "}
        <Link style={{ color: "orange" }} to={`/`}>
          {" "}
          Catz-Play{" "}
        </Link>{" "}
      </div>
      <div className="right menu">
        {/* <Menu.Item>
          <Input icon="search" placeholder="Search cats..." />
        </Menu.Item> */}
        <Menu.Item fixed="right" size="small">
          <Dropdown style={{ color: "orange" }} width={2} text="Menu">
            <Dropdown.Menu>
              <Dropdown.Item
                as={Link}
                to={`/profile/${user.id}`}
                text="Manage your account"
              />
              <Dropdown.Item to={`/add-cat`} as={Link} text="Add cat profile" />
              <Dropdown.Item onClick={logOut} text="Log out" />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
        <div className="ui item">
          {" "}
          {/* <Link to={`/menu`}> Menu </Link>{" "} */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
