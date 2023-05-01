import { UserContext } from '../App';
import { useContext } from 'react';
import { useParams } from 'react-router';


function WorkshopEnroll () {

  const { id } = useParams()

  const [ user, setUser ] = useContext(UserContext)
  const [enrollFormData, setEnrollFormData] = useState({
    user_id: user.id,
    workshop_id: id,
    referall_type: "",
    additional_notes: ""
  })

  return (
    <div>

    </div>
  )

}

export default WorkshopEnroll