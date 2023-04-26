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
        .then(user => setUser(user))
      }
    })
  }, [])

  return (
    <UserContext.Provider value= {[user, setUser]}>
      { user ?
        <Routes>
          <NavBar />
        </Routes>

        :

        <Login />

      }
    </UserContext.Provider>  
    );
}

export default App;
