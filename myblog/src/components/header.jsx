import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";

function Header() {
  const { blogs } = useContext(BlogContext);
  return (
    <Fragment>
      <Navbar color="dark my-1" dark expand="md">
        <NavbarBrand href="/">
          <h4>My Blogs({blogs.length})</h4>
        </NavbarBrand>

        <Nav className=" text-center" navbar>
          <NavItem>
            <Link to="/add-blog">
              <Button>New Blog</Button>
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </Fragment>
  );
}

export default Header;
