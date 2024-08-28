import { Route, Routes } from 'react-router-dom'
import './App.css'
import { About, Buyers, Home, Sellers } from './pages'
import { Testimonials } from './pages/testimonials'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/buyers' element={<Buyers />} />
      <Route path='/sellers' element={<Sellers />} />
      <Route path='/about' element={<About />} />
      <Route path='/testimonials' element={<Testimonials />} />
    </Routes>
  )
}

export default App
