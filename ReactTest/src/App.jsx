import { useState } from 'react'
import './App.css'
import FoodApi from './assets/component/FoodApi'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <FoodApi/>
    </>
  )
}

export default App
