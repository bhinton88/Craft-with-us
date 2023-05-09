import { useNavigate } from "react-router";
import WorkshopCard from "./WorkshopCard"
import Button from 'react-bootstrap/Button';

function WorkshopList({ workshops }) {

  const navigate = useNavigate();

  function onClick() {
    navigate('/all_workshops/new_workshop')
  }

  return (
    <section className='allCardContainers'>
      <Button onClick={onClick}>Add a new workshop!</Button>
        {
          workshops.map(value => <WorkshopCard 
                                    key={value.id} 
                                    workshop={value}
                                    users={value.users}
                                  />)
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