import { useRef } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import "../Style/Style.css";



function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-navbar")
    }
  return (
   <header>
    <h3>Logo</h3>
    <nav ref={navRef}>
        <a href='/#' onClick={showNavbar}>Home</a>
        <a href='/#' onClick={showNavbar}>About</a>
        <a href='/#' onClick={showNavbar}>Profesional</a>
        <a href='/#' onClick={showNavbar}>Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes/>
        </button>
    </nav>
    <button className="nav-btn open" onClick={showNavbar}>
        <FaBars />
    </button>
   </header>
  )
}

export default Navbar
