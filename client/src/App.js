import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, createContext, useContext } from 'react';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);

  const UserContext = createContext()


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
    <div>
      <UserContext.Provider value={{ user, setUser }} >
        {user? 
          <NavBar />
        :
          <Login />
        }
      </UserContext.Provider>
    </div>
  );
}

export default App;
