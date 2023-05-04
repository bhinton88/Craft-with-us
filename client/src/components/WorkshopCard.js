import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom"


function WorkshopCard ({ workshop }) {

  const navigate = useNavigate();

  function onClick () {
    navigate(`/workshops/${workshop.id}/enroll`)
  }

  // some logic which checks if our user has signed up for a class.. and shows some mark which allows the user
  // to know that they are signed up 

  return (
   <Card className="mx-auto my-2">
    <Card.Body>
      <Card.Title><strong>{workshop.workshop_name}</strong></Card.Title>
      <Card.Subtitle>
        <u>Instructor</u>: <strong>{workshop.instructor_name}</strong>
        <br/>
        <u>Craft Type</u>: <em>{workshop.craft_type}</em>
      </Card.Subtitle>
      <Card.Text><u>Skill level</u>: <em>{workshop.skill_level_required}</em></Card.Text>
      <Card.Text>
        Description: 
        <br/>
        {workshop.workshop_description}
      </Card.Text>
      <Card.Text>
        Yarn/Tool requirements:
        <br/>
        {workshop.yarn_and_tool_requirements}
      </Card.Text>
      <Button variant="info" onClick={onClick}>Enroll me in this workshop!</Button>
    </Card.Body>
   </Card>
  )

}

export default WorkshopCard