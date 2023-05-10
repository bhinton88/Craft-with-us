import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { UserContext } from '../App';
import { useContext, useState } from "react";

function NavBar() {

  const [ user, setUser ] = useContext(UserContext)
  const [ expanded, setExpanded] = useState(false)

  function onClick () {
    fetch("/logout", {
      method: "DELETE",
    })

    setUser(null)
  }


  return(
    <Navbar expanded={expanded} bg="light" expand="lg"  >
      <Container>
        <Navbar.Brand>
        <img 
          src={require("../images/295423.png")}
          alt="yarn ball"
          className="d-inline-block align-top"
          id="navbarImage"
          />
          Craft with us!
        </Navbar.Brand>
        <Navbar.Text>
            Signed in as: <strong>{user.name}</strong>
        </Navbar.Text>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/">Home</Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/my_workshops">My Workshops</Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/all_workshops">All Available Workshops</Nav.Link>
          </Nav>
          <Button onClick={onClick}>Sign Out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  )

}

export default NavBar