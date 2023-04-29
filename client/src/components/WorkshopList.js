import { useState } from "react"
import WorkshopCard from "./WorkshopCard"

function WorkshopList() {

  const [workshops, setWorkshops] = useState([])

  useEffect(() => {
    fetch("/workshops")
    .then(response => response.json())
    .then(data => setWorkshops(data))
  }, [])

}

export default WorkshopList