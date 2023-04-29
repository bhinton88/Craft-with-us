import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, createContext } from 'react';
import { Route, Routes } from "react-router-dom";
import Login from './components/Login';
import NavBar from './components/NavBar';

export const UserContext = createContext();

function App() {

  const [user, setUser] = useState(null);

  useEffect(()=> {
    fetch("/me")
    .then((response) => {
      if(response.ok)
      {
        response.json()
        .then((user) => setUser(user))
      }
    })
  }, [])


  if(!user) {
    return (
    <UserContext.Provider value={[user, setUser]}> 
      <Login /> 
    </UserContext.Provider> 
    )
  }


  return (
    <div>
      <UserContext.Provider value= {[user, setUser]}>
        <NavBar />
        <main>
          <Routes>
          </Routes>
        </main>
      </UserContext.Provider>  
    </div>
    );
}

export default App;
