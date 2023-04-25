import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useContext } from "react";
import { UserContext } from "../context/user";

function SignUpForm () {
  const { setUser } = useContext(UserContext)
  const [errors, setErrors] = useState([]);
  const [newUserData, setNewUserData] = useState({
    username: "",
    password: "",
    password_confirmation: "",
    name: "",
    email: "",
    level_of_skill: ""
  });

  function onChange (event) {
    setNewUserData({
      ...newUserData,
      [event.target.name]: event.target.value
    })
  }

  function onSubmit(e){
    e.preventDefault()
    fetch("/users",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newUserData)
    })
    .then(response => {
      if(response.ok){
        response.json().then(user => setUser(user))
      } else {
        response.json().then(data => setErrors(data.errors))
      }
    })
  }

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Username:</Form.Label>
        <Form.Control 
          name="username"
          type="text" 
          placeholder="Enter Username" 
          value={newUserData.username}
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          name="password"
          type="password" 
          placeholder="Enter Password" 
          value={newUserData.password}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Confirm Password:</Form.Label>
        <Form.Control
          name="password_confirmation"
          type="password" 
          placeholder="Please Confirm Password" 
          value={newUserData.password_confirmation}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Full Name:</Form.Label>
        <Form.Control
          name="name"
          type="text" 
          placeholder="Enter Full Name" 
          value={newUserData.name}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Full Name:</Form.Label>
        <Form.Control
          name="email"
          type="email" 
          placeholder="username@example.com" 
          value={newUserData.email}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Select
        name="level_of_skill"
        onChange={onChange}
        value={newUserData.level_of_skill}
      >
        <option>Select a Skill Level</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </Form.Select>
      <Form.Text>
        <ul>
          {
            errors.map(value => {
              <li>{value}</li>
            })
          }
        </ul>
      </Form.Text>

      <Button variant="primary" type="submit" onClick={onSubmit}>
        Submit
      </Button>
    </Form>
  )
}

export default SignUpForm 