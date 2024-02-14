import './App.css'
import Header from './components/Header'
import {  Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Services from './pages/Services'
function App() {
  

  return (
    <div className=' bg-[#e5e7e2]'>
      
      <Header/>
      
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </div>
  )
}

export default App
