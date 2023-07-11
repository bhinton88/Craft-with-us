import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, createContext } from 'react';
import { Route, Routes } from "react-router-dom";
import Login from './components/Login';
import NavBar from './components/NavBar';
import WorkshopList from './components/WorkshopList';
import WorkshopEnroll from './components/WorkshopEnroll';
import UserWorkshopList from './components/UserWorkshopsList';
import AddWorkshopForm from './components/AddWorkshopForm';
import "./index.css" 

export const UserContext = createContext();

function App() {

  const [user, setUser] = useState(null);
  const [workshops, setWorkshops] = useState([]);
  const [signups, setSignups] = useState([]);

  useEffect(() => {
    fetch("/workshops")
    .then(response => response.json())
    .then(data => setWorkshops(data))
  }, [])

  useEffect(()=> {
    fetch("/me")
    .then((response) => {
      if(response.ok)
      {
        response.json()
        .then((user) => {
          setUser(user)
          setSignups(user.signups)
        })
      }
    })
  }, [])

  
  if(!user) {
    return (
    <UserContext.Provider value={[user, setUser,signups, setSignups]}> 
      <Login /> 
    </UserContext.Provider> 
    )
  }

  function updateWorkshop (newWorkshop){
    setWorkshops([
      ...workshops,
      newWorkshop
    ])
  }

  return (
    <div>
      <UserContext.Provider value={[user, setUser,signups, setSignups]}>
        <NavBar />
        <main>
          <Routes>
            <Route 
              path="/all_workshops" 
              element={<WorkshopList workshops={workshops} />} 
            />
            <Route 
              path="/all_workshops/new_workshop" // /workshops/new
              element={<AddWorkshopForm 
              updateWorkshop={updateWorkshop}/>} 
            />
            <Route 
              path="/my_workshops" 
              element={<UserWorkshopList /> } 
            />
            <Route 
              path="/all_workshops/:id/enroll" 
              element={<WorkshopEnroll />} 
            />
          </Routes>
        </main>
      </UserContext.Provider>  
    </div>
    );
}

export default App;
