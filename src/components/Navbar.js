import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar(props) {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <Navbar expand="lg" className="bg-danger">
      <Container>
        <Navbar.Brand href="/">FOODTRUCKER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/foodtrucks">Find a FoodTruck</Nav.Link>
            <NavDropdown title="User" id="basic-nav-dropdown">
              {!isLoggedIn && (
                <>
                  <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                  <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
                </>
              )}
              {isLoggedIn && (
                <NavDropdown.Item onClick={logOutUser}>
                  Log out
                </NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
