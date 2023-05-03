import { UserContext } from '../App';
import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function WorkshopEnroll () {

  const { id } = useParams()
  const navigate = useNavigate()
  

  const [user, setUser ] = useContext(UserContext)
  const [errors, setErrors] = useState([])
  const [enrollFormData, setEnrollFormData] = useState({
    user_id: user.id,
    workshop_id: parseInt(id),
    referral_type: "",
    additional_notes: ""
  })

  function onChange(event) {
    setEnrollFormData({
      ...enrollFormData,
      [event.target.name]: event.target.value
    })
  }

  function onClick(event){
    setEnrollFormData({
      ...enrollFormData,
    [event.target.name]: event.target.value
    })
  }

  function onSubmit(event){
    event.preventDefault()
    fetch("/signups",{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(enrollFormData)
    })
    .then(response => {
      if(response.ok) {
        response.json().then(data => navigate('/workshops')) // what do I do with this data?
      } else{
        response.json().then(data => setErrors(data.errors))
      }
    })
  }
  
  return (
    <Form onSubmit={onSubmit}>
    <Form.Group onClick={onClick}  className="mb-3">
      <Form.Text>How did you hear about this workshop?</Form.Text>
      <Form.Check 
        type='radio'
        label='Email'
        name='referral_type'
        id={`default-radio`}
        value="email"
      />
      <Form.Check 
        type='radio'
        label='Social Media'
        name='referral_type'
        id={`default-radio`}
        value="social media"
      />
      <Form.Check 
        type='radio'
        label='Ravelry'
        name='referral_type'
        id={`default-radio`}
        value="ravelry"
      />
      <Form.Check 
        type='radio'
        label='Local Yarn Shop'
        name='referral_type'
        id={`default-radio`}
        value="local yarn shop"
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Any notes/comments for the Instructor? </Form.Label>
      <Form.Control 
        name="additional_notes"
        as="textarea" 
        onChange={onChange}
        rows={3} 
      />
    </Form.Group>

    <Form.Text>
      <ul>
        {
          errors.map(value => {
            return (
            <li 
              key={value}
              style={{color: "red"}}
            >
              <strong>{value}</strong>
            </li>
            )
            })
          }
      </ul>
    </Form.Text>
    <Button variant="primary" type="submit">
      Enroll now!
    </Button>
  </Form>
  )

}

export default WorkshopEnroll