import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import home from "../assets/home.png"
import info from "../assets/info.png"
import folder from "../assets/folder.png"
import linkedin from "../assets/linkedin.png"
import gmail from "../assets/gmail.png"
import github from "../assets/github.png"
import programming from "../assets/programming.png"
import star from "../assets/star.png"
import certificate from "../assets/certificate.png"

const NavItem = ({ to, iconSrc, altText, label }) => (
        <Link to={to} className='w-full'>
        <div className='flex flex-col items-center justify-center text-center p-2 rounded-lg hover:bg-[#232627] transition-colors'>
            <img width="30" height="30" src={iconSrc} alt={altText} className='mt-1'/>
            {label && <span className='text-xs text-gray-400 mt-1'>{label}</span>}
        </div>
    </Link>
);

const Navbar = () => {
  return (
    <div className='flex'>
        <NavItem 
                to="/" 
                iconSrc={home} 
                altText="Home" 
                label="Home"
            />
            <NavItem 
                to="/projects" 
                iconSrc={folder}
                altText="Projects" 
                label="Projects"
            />
            <NavItem 
                to="/about" 
                iconSrc={info} 
                altText="About" 
                label="About"
            />
            <NavItem 
                to="/certifications" 
                iconSrc={certificate} 
                altText="Certifications" 
                label="Certifications"
            />
            <NavItem 
                to="/accomplishments" 
                iconSrc={star} 
                altText="Accomplishments" 
                label="Accomplishments"
            />
    </div>
  )
}

export default Navbar