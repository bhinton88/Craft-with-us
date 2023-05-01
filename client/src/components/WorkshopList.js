import { useState, useEffect } from "react"
import WorkshopCard from "./WorkshopCard"

function WorkshopList() {

  const [workshops, setWorkshops] = useState([])
  

  useEffect(() => {
    fetch("/workshops")
    .then(response => response.json())
    .then(data => setWorkshops(data))
  }, [])

  console.log(workshops)

  return (
    <section>
        {
          workshops.map(value => <WorkshopCard key={value.id} workshop={value} />)
        }
    </section>
  )

}

export default WorkshopList