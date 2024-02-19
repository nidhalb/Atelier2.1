import React, { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Events from './components/Events'
import { Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'
import EventDetails from './components/EventDetails'

function App() {
  const [count, setCount] = useState(0)
  const Events = React.lazy(() => import('./components/Events'))

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
    <Routes>
      <Route path='/' element ={<Events/>}/>
      <Route path='/events/:id' element ={<EventDetails/>}/>
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </Suspense>
  )
}

export default App
