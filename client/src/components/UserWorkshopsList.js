import { UserContext } from '../App';
import { useContext } from 'react';

function UserWorkshopList () {

  const [user, setUser] = useContext(UserContext)

  const currentUserWorkshops = user.workshops

  return (
    <section>

    </section>
  )

}

export default UserWorkshopList