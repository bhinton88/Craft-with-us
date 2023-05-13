import { UserContext } from '../App';
import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card"


function WorkshopEnroll () {

  const { id } = useParams()
  const navigate = useNavigate()
  

  const [user, setUser,signups, setSignups]= useContext(UserContext)
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

  function onSubmit(event){
    event.preventDefault()
    fetch("/signups",{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(enrollFormData)
    })
    .then(response => {
      if(response.ok) {
        response.json().then(data => {
          setSignups([...signups, data])
          navigate('/my_workshops')}
          ) 
      } else{
        response.json().then(data => setErrors(data.errors))
      }
    })
  }
  
  return (
    <div id="enrollContainer">
      <Card>
        <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" value={enrollFormData.referral_type}>
          <Form.Text>How did you hear about this workshop?</Form.Text>
          <Form.Check 
            type='radio'
            label='Email'
            name='referral_type'
            id={`default-radio`}
            value="email"
            checked={enrollFormData.referral_type === "email"}
            onChange={onChange}
          />
          <Form.Check 
            type='radio'
            label='Social Media'
            name='referral_type'
            id={`default-radio`}
            value="social media"
            checked={enrollFormData.referral_type === "social media"}
            onChange={onChange}
          />
          <Form.Check 
            type='radio'
            label='Ravelry'
            name='referral_type'
            id={`default-radio`}
            value="ravelry"
            checked={enrollFormData.referral_type === "ravelry"}
            onChange={onChange}
          />
          <Form.Check 
            type='radio'
            label='Local Yarn Shop'
            name='referral_type'
            id={`default-radio`}
            value="local yarn shop"
            checked={enrollFormData.referral_type === "local yarn shop"}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Any notes/comments for the Instructor? </Form.Label>
          <Form.Control 
            name="additional_notes"
            as="textarea" 
            value={enrollFormData.additional_notes}
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
    </Card>
  </div>
  )

}

export default WorkshopEnroll