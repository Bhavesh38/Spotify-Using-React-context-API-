import React, { useEffect } from 'react'
import Login from './components/Login'
import { SET_TOKEN } from './utils/Contants';
import { useStateProvider } from './utils/StateProvider';
import Spotify from './components/Spotify';

function App() {
  const [{ token }, dispatch] = useStateProvider()
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch({
        type: SET_TOKEN,
        token
      });
    }
  }, [token, dispatch])
  console.log(token);
  return (
    <div>
      {token ? <Spotify /> : <Login />}
    </div>
  )
}

export default App

