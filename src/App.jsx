import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './component/Todos'
import AllTodo from './component/AllTodos'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >  
    
    
      <Todos/>
      <AllTodo/>
     
    </>
  )
}

export default App
