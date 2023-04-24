import { useEffect, useState, createContext, useContext } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const [loginToggle, setLoginToggle] = useState(false);

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

    </div>
  );
}

export default App;
