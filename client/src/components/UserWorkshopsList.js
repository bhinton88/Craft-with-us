import { UserContext } from '../App';
import { useContext, useState } from 'react';
import UserWorkshopCard from './UserWorkshopCard';

function UserWorkshopList () {

  const [user, setUser] = useContext(UserContext)
  const [currentUserSignups, setCurrentUserSignups] = useState(user.signups)

   console.log(user)

  function updateSignups(signup) {
   const updateSignups = currentUserSignups.map(value =>{
      if(value.id === signup.id) {
        return signup
      } else {
        return value
      }
    })

    setCurrentUserSignups(updateSignups)
  }
  

  // make sure to set up serializer for response on signup edit to include workshop object in response



  return (
    <section>
      {
        currentUserSignups.map(value => <UserWorkshopCard 
                                            key={value.id} 
                                            signup={value} 
                                            updateSignups={updateSignups}
                                          />)
      }
    </section>
  )

}

export default UserWorkshopList