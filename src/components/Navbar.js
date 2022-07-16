import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HamburgerMenu,
  Right,
  Left,
  Wrapper,
  WrapperResponsive,
  NavbarResponsive,
  Nav,
} from "./NavStyle";

const activeStyle = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "none",
    textDecoration: "none",
    color: isActive && "blue",
    margin: "70px",
    cursor: "pointer",
  };
};

const activeStyleResponsive = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "none",
    textDecoration: "none",
    color: isActive && "blue",
    margin: "40px",
    cursor: "pointer",
  };
};

const Navbar = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  return (
    <Nav isResponsive={isResponsive}>
       <HamburgerMenu
            onClick={() => {
              setIsResponsive((el) => !el);
              console.log(isResponsive);
            }}
          >
            {isResponsive ? <div>&#10005;</div> : <div>&#8801;</div>}
          </HamburgerMenu>
      <Wrapper>
          <Left>
          <NavLink style={activeStyle} to="/">
            Home
          </NavLink>
          <NavLink style={activeStyle} to="/approved">
            Approved Requests
          </NavLink>
          <NavLink style={activeStyle} to="/pending">
            Pending Requests
          </NavLink>
          <NavLink style={activeStyle} to="/rejected">
            Rejected Requests
          </NavLink>
        </Left>

        <Right>
          <NavLink style={activeStyle} to="/form">
            Create request
          </NavLink>
        </Right>
      </Wrapper>
      <>
        {isResponsive && (
          <NavbarResponsive>
            {console.log(isResponsive)}
            <WrapperResponsive>
              <NavLink style={activeStyleResponsive} to="/">
                Home
              </NavLink>
              <NavLink style={activeStyleResponsive} to="/approved">
                Approved Requests
              </NavLink>
              <NavLink style={activeStyleResponsive} to="/pending">
                Pending Requests
              </NavLink>
              <NavLink style={activeStyleResponsive} to="/rejected">
                Rejected Requests
              </NavLink>
              <NavLink style={activeStyle} to="/form">
                Create request
              </NavLink>
            </WrapperResponsive>
          </NavbarResponsive>
        )}
      </>
    </Nav>
  );
};

export default Navbar;
