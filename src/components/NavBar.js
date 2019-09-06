import React from "react";
import { Icon, Menu, Item, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NavBar = props => {
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
        <div className="ui item">
          {" "}
          <Link to={`/menu`}>
            {" "}
            Menu
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default NavBar;