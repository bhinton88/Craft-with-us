import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

function UserWorkshopCard ({ signup, updateSignups, deleteSignup }) {
  const [errors, setErrors ] = useState([])
  const [updateToggle, setUpdateToggle] = useState(false)
  const [signupFormData, setSignupFormData] = useState({
    referral_type: signup.referral_type,
    additional_notes: signup.additional_notes
  })

  function onChange(event) {
    setSignupFormData({
      ...signupFormData,
      [event.target.name]: event.target.value
    })
  }

  function onToggleClick() {
    setUpdateToggle( updateToggle => !updateToggle)
  }

  function onSubmit (event ){
    event.preventDefault()
    fetch(`/signups/${signup.id}`,{
      method: "PATCH",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(signupFormData)
    })
    .then(response => {
      if(response.ok){
        response.json().then(data => updateSignups(data))
      } else {
        response.json().then(data => setErrors(data.errors))
      }
    })
    setUpdateToggle( updateToggle => !updateToggle)

  }

  function onClick(){
    fetch(`/signups/${signup.id}`,{
      method: "DELETE"
    })
    
    deleteSignup(signup.id)
  }


  return (
    <Card className="mx-auto my-2">
      <Card.Body>
        <Card.Title><strong>{signup.workshop.workshop_name}</strong></Card.Title>
        <Card.Subtitle>
          <u>Craft Type</u>: <em>{signup.workshop.craft_type}</em>
        </Card.Subtitle>
      </Card.Body>
      { updateToggle ? 
          <Form onSubmit={onSubmit}>
            <Form.Group>
            <Form.Text>How did you hear about this workshop?</Form.Text>
              <Form.Check 
                type='radio'
                label='Email'
                name='referral_type'
                id={`default-radio`}
                value="email"
                checked={signupFormData.referral_type === "email"}
                onChange={onChange}
              />
              <Form.Check 
                type='radio'
                label='Social Media'
                name='referral_type'
                id={`default-radio`}
                value="social media"
                checked={signupFormData.referral_type === "social media"}
                onChange={onChange}
              />
              <Form.Check 
                type='radio'
                label='Ravelry'
                name='referral_type'
                id={`default-radio`}
                value="ravelry"
                checked={signupFormData.referral_type === "ravelry"}
                onChange={onChange}
              />
              <Form.Check 
                type='radio'
                label='Local Yarn Shop'
                name='referral_type'
                id={`default-radio`}
                value="local yarn shop"
                checked={signupFormData.referral_type === "local yarn shop"}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Any notes/comments for the Instructor? </Form.Label>
              <Form.Control 
                name="additional_notes"
                as="textarea"
                value={signupFormData.additional_notes} 
                onChange={onChange}
                rows={3} 
              />      
            </Form.Group>
            <Button type="submit" variant="secondary" onSubmit={onSubmit}>Finished updating info!</Button>
          </Form>
          :
          <Card.Text>
            <strong><span>Provided information at Signup:</span></strong>
                <br/>
                How did you learn about this workshop:
                <br/> 
                <u> {signup.referral_type} </u>
                <br/> 
                <br/>
                Additional notes for the instructor: 
                <br/>
                {signup.additional_notes}
                <br/>
            </Card.Text>
        }
        <Card.Text>
            <Button onClick={onToggleClick} disabled={updateToggle ? true : false}>Begin updating Info</Button>
            <Button onClick={onClick} variant="danger">Remove me from Workshop</Button>
        </Card.Text>
    </Card>
  )

}

export default UserWorkshopCard