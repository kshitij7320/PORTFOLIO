import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import Projects from "./Components/Projects"
import About from "./Components/About"
import bg from "./assets/bg.jpg"
import { Route, Routes } from "react-router-dom"
import Certification from "./Components/Certification"
import Accomplishment from "./Components/Accomplishment"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/certifications" element={<Certification/>}/>
        <Route path="/accomplishments" element={<Accomplishment/>}/>
        <Route/>
      </Routes>
    </div>
  )
}

export default App