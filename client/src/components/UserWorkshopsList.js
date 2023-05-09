import { UserContext } from '../App';
import { useContext, useState } from 'react';
import UserWorkshopCard from './UserWorkshopCard';

function UserWorkshopList () {

  const [user, setUser] = useContext(UserContext)
  const [currentUserSignups, setCurrentUserSignups] = useState(user.signups)

  function updateSignups(updatedSignup) {
   const updateSignups = currentUserSignups.map(value =>{
      if(value.id === updatedSignup.id) {
        return updatedSignup
      } else {
        return value
      }
    })

    setCurrentUserSignups(updateSignups)
  }

  function deleteSignup(signupId) {
    const removeSignup = currentUserSignups.filter(value=> value.id != signupId)

    setCurrentUserSignups(removeSignup)
  }

  return (
    <section className='allCardContainers'>
      {
        currentUserSignups.map(value => <UserWorkshopCard 
                                            key={value.id} 
                                            signup={value} 
                                            updateSignups={updateSignups}
                                            deleteSignup={deleteSignup}
                                          />)
      }
    </section>
  )

}

export default UserWorkshopList