import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Events from './components/Events'
import { Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element ={<Events/>}/>
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default App
