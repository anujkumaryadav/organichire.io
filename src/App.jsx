import Navbar from './components/common/Navbar'
import Home from './components/core/Home'
import Product from './components/core/Product'
import Contactus from './components/core/Contactus'
import Aboutus from './components/core/Aboutus'
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div>
      

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/contactus" element={<Contactus/>} />
          <Route path="/aboutus" element={<Aboutus/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
