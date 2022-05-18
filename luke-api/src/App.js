import React from 'react'
import{BrowserRouter, Route, Routes} from "react-router-dom"
import axios from 'axios'
import HeaderForm from './components/HeaderForm'
import People from './views/People'
import Planets from './views/Planets'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <h1> Api Walker </h1>
      <HeaderForm/>
      <Routes>
      <Route path='/person/:id' element={<People />}/> 
      <Route path='/planet/:id' element={<Planets />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
