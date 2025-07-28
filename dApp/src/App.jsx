import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import DonatePage from './page/DonatePage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:address' element={<DonatePage/>}/>
    </Routes>
  )
}

export default App
