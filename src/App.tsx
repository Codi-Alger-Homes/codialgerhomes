import { Route, Routes } from 'react-router-dom'
import { About, Buyers, Home, Sellers } from './pages'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/buyers' element={<Buyers />} />
      <Route path='/sellers' element={<Sellers />} />
      <Route path='/about' element={<About />} />
    </Routes>
  )
}

export default App
