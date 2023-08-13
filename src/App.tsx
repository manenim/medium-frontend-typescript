
import { useEffect } from 'react'
import './App.css'
import Login from './pages/Login'
import axios from 'axios'


function App() {
  // const [count, setCount] = useState(0)

  useEffect(() => {
    const checkAuthStatus = async () => {
        const authStatus = await axios.get("http://localhost:3000/auth/status", {withCredentials: true})
        console.log(authStatus)

    }
    return () => checkAuthStatus()
  
  
  }, [])
  

  return (
    <>
      <Login />
    </>
  )
}

export default App
