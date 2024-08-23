import { Route, Routes } from 'react-router-dom'
import { About, Home, Testimonials } from './pages'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/testimonials' element={<Testimonials />} />
    </Routes>
  )
}

export default App
