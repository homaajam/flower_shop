import { useState } from 'react'
import './index.css'
import './component/pages/Home'
import Home from './component/pages/products'
function App() {
  const [count, setCount] = useState(0)

  return (
  
    <Home/>
  )
}

export default App
