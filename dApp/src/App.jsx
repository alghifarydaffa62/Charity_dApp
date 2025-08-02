import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Charity from './page/Charity'
import DonatePage from './page/DonatePage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Main' element={<Charity/>}/>
      <Route path='/charity/:address' element={<DonatePage/>}/>
    </Routes>
  )
}

export default App
