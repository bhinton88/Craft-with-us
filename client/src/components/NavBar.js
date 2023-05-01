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
    <Navbar bg="light" expand="lg" >
      <Navbar.Brand >Craft with us!</Navbar.Brand>
      <Navbar.Text>
          Signed in as: <strong>{user.name}</strong>
      </Navbar.Text>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/workshops/:user_id">My Workshops</Nav.Link>
          <Nav.Link as={Link} to="/workshops">All Available Workshops</Nav.Link>
        </Nav>
        <Button onClick={onClick}>Sign Out</Button>
      </Navbar.Collapse>
  </Navbar>


  )

}

export default NavBar