import { useState } from "react";
import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddWorkshopForm({updateWorkshop}) {

  const navigate = useNavigate();

  const [errors, setErrors] = useState([]);
  const [newWorkshopFormData, setNewWorkshopFormData] = useState({
    workshop_name: "",
    instructor_name: "",
    craft_type: "",
    skill_level_required: "",
    workshop_description: "",
    yarn_and_tool_requirements: ""
  })

  console.log(newWorkshopFormData)

  function onChange(event){
    setNewWorkshopFormData({
      ...newWorkshopFormData,
      [event.target.name]: event.target.value
    })
  }

  function submitNewWorkshop(event){
    event.preventDefault()
    fetch('/workshops',{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newWorkshopFormData)
    })
    .then(response => {
      if(response.ok){
        response.json().then(data => {
          updateWorkshop(data)
          alert("New Workshop Added!")
          navigate('/all_workshops')
        })
      } else {
        response.json().then(data => setErrors(data.errors))
      }
    })
  }

  return (
    <div className="newWorkshopContainer">
    <Form onSubmit={submitNewWorkshop}>
      <Form.Group className="mb-3">
        <Form.Label>Workshop Name:</Form.Label>
        <Form.Control 
          name="workshop_name"
          type="text" 
          placeholder="Please enter name of the workshop"
          value={newWorkshopFormData.workshop_name}
          onChange={onChange}
        />
        <Form.Label>Name of Instructor:</Form.Label>
        <Form.Control
          name="instructor_name"
          type="text" 
          placeholder="Please enter Instructor name" 
          value={newWorkshopFormData.instructor_name}
          onChange={onChange}
        />
        <Form.Label>Craft type (Please enter only one type):</Form.Label>
        <Form.Control
          name="craft_type"
          type="text" 
          placeholder="Please enter craft type" 
          value={newWorkshopFormData.craft_type}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Craft Skill Level needed for workshop: </Form.Label>
        <Form.Select
          name="skill_level_required"
          onChange={onChange}
          value={newWorkshopFormData.skill_level_required}
        >
          <option>Select a Skill Level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </Form.Select>
      </Form.Group>
      <br />
      <Form.Group className="mb-3">
        <Form.Label>Please give a brief description of the workshop: </Form.Label>
        <Form.Control 
          as="textarea"
          name="workshop_description"
          value={newWorkshopFormData.workshop_description}
          onChange={onChange}
          rows={4}
        />
        <Form.Label>What yarn and tools will be required for this workshop?</Form.Label>
        <Form.Control 
          as="textarea"
          name="yarn_and_tool_requirements"
          value={newWorkshopFormData.yarn_and_tool_requirements}
          onChange={onChange}
          rows={4} 
        />
      </Form.Group>
      <Form.Text>
        <ul>
          {
            errors.map(value => <li style={{color: "red" }}><strong>{value}</strong></li>)
          }
        </ul>
      </Form.Text>
      <Button variant="primary" type="submit">
        Submit new workshop
      </Button>
    </Form>
    </div>
  )

}

export default AddWorkshopForm;