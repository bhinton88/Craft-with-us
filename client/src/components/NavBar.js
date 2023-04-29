import { Nav, Navbar, Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom";
import { UserContext } from '../App';
import { useContext } from "react";

function NavBar() {

  const [ user, setUser ] = useContext(UserContext)

  function onClick () {
    fetch("/logout", {
      method: "DELETE",
    })

    setUser(null)
  }

  return(
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand >Craft with us!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/Classes/:id">My Workshops</Nav.Link>
          <Nav.Link as={Link} to="/classes">All Available Workshops</Nav.Link>
        </Nav>
        <Button onClick={onClick}>Sign Out</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>


  )

}

export default NavBar