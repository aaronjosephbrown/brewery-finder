import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import BreweryInfo from './pages/BreweryInfo'
import BreweryContextProvider from './context/BreweryContext'

function App() {
  return (
    <BreweryContextProvider>
      <Router>
        <Navbar/>
        <Routes> 
          <Route path="/" element={<Home />}/>
          <Route path="BreweryInfo/:id" element={<BreweryInfo />}/>
          <Route path="about" element={<About />}/>
        </Routes>
        <Footer/>
      </Router>
    </BreweryContextProvider>
  )
}

export default App
