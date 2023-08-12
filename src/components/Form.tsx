import {useState} from 'react'
import axios from 'axios'

const Form = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  const clickHandler = async (e) => {
      e.preventDefault()
        console.log('clicked')
      const data = await axios.post("http://localhost:3000/auth/login", {email, password}, {withCredentials: true})
      console.log(data)
    }
    
  return (
    <form action="">
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type='text' value={password} onChange={(e) => setPassword(e.target.value) } />
          <button onClick = {clickHandler}>Submit</button>
    </form>
  )
}

export default Form