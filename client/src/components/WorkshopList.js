import { useState, useEffect } from "react"
import WorkshopCard from "./WorkshopCard"
import Button from 'react-bootstrap/Button';
import UserWorkshopCard from "./UserWorkshopCard";

function WorkshopList() {

  const [workshops, setWorkshops] = useState([])

  console.log(workshops)
  

  useEffect(() => {
    fetch("/workshops")
    .then(response => response.json())
    .then(data => setWorkshops(data))
  }, [])

  return (
    <section>
      <Button>Add a new workshop!</Button>
        {
          workshops.map(value => <WorkshopCard key={value.id} workshop={value} />)
        }
    </section>
  )

}

export default WorkshopList

// User
//  - signups [{
//   id:
//   rest of the information
//   workshop: {

//   }
//  }]