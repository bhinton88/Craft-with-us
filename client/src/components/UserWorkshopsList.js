import { UserContext } from '../App';
import { useContext } from 'react';
import UserWorkshopCard from './UserWorkshopCard';

function UserWorkshopList () {

  const [ user, setUser, signups, setSignups] = useContext(UserContext)
  

  function updateSignups(updatedSignup) {
   const updatedSignups = signups.map(value =>{
      if(value.id === updatedSignup.id) {
        return updatedSignup
      } else {
        return value
      }
    })

    setSignups([...signups, updatedSignups])
  }

  function deleteSignup(signupId) {
    const removeSignup = signups.filter(value=> value.id !== signupId)

    setSignups(removeSignup)
  }

  return (
    <section className='allCardContainers'>
      {
        signups.map(value => <UserWorkshopCard 
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